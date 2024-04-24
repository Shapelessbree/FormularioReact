"use client";
import { ClassAttributes, InputHTMLAttributes, ReactElement } from "react";
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface InputBaseProps {
    name: string;
    label: string;
    type?: string;
    placeholder: string;
}


export function InputBase({
    name,
    label,
    type = "text",
    placeholder,

}: ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    InputBaseProps): ReactElement {
    const { register, formState } = useFormContext();
    const error = formState.errors[name!];

    return (
        <div className='flex flex-col '>
            <label
                className='text-black font-semibold'
                htmlFor={name}>
                {label}
            </label>
            <input
                className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-medium-blue focus:border-transparent'
                type={type}
                placeholder={placeholder}
                {...register(name!)}

            />
            <div className="h-[15px] ">
                <p className="text-[10px] text-red-500 whitespace-nowrap">
                    {error?.message?.toString()}
                </p>
            </div>
        </div>
    )
}