"use client";

import { ButtonBase } from "@/app/components/buttons/ButtonBase";
import { createUserSchema } from "@/app/components/helpers/SchecmaValidate";
import { User } from "@/app/models/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { InputBase } from '../app/components/inputs/InputBase';
// import './app/styles.css';

export default function Home() {

  const methods = useForm<User>({
    defaultValues: {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confPassword: "",
      age: 0,
      photoUrl: 'https://pngfre.com/wp-content/uploads/hello-kitty-44-300x288.png',
    },
    resolver: yupResolver(createUserSchema),
  }); 

  
  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-500">
      <div className="bg-red-200 p-10 rounded-lg flex flex-col items-center justify-center shadow-md mr-54 border-2 border-white">
        <div className="flex items-center justify-center mb-6">
        <img className="w-22 h-20 object-cover mr-6" src={methods.getValues().photoUrl} alt="Photo" />
        <h1 className="text-3xl text-red-400 font-sans-serif font-semibold">
        Formulario de registro
          </h1>
          </div>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="text-gray-200 form font-sans-serif">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-7 mt-19 mb-18">
                <div className="text-red-900 flex flex-col gap-3 font-comic-sans">
                  <InputBase
                    name="name"
                    label={"Nombres:"}
                    placeholder={"Ingresa tus nombres*"}
                    className="input-field"
                  />
                  <InputBase
                    name="age"
                    label={"Edad:"}
                    placeholder={"Ingresa tu edad*"}
                    type="number"
                  />
                  <InputBase
                    name="password"
                    label={"Contraseña:"}
                    placeholder={"Ingresa tu contraseña*"}
                    type="password"
                  />
                  <InputBase
                    name="confPassword"
                    label={"Confirmar contraseña:"}
                    placeholder={"Repite tu contraseña*"}
                    type="Password"
                  />
                </div>
                <div className="text-red-900 flex flex-col gap-3 font-comic-sans">
                <InputBase
                    name="username"
                    label={"Usuario:"}
                    placeholder={"Ingresa un usuario*"}
                    type="username"
                  />
                  <InputBase
                    name="lastName"
                    label={"Apellidos:"}
                    placeholder={"Ingresa tu apellidos*"}
                  />
                  <InputBase
                    name="email"
                    label={"Correo electrónico:"}
                    placeholder={"Ingresa un correo*"}
                    type="email"
                  />
                </div>
                </div>
    {/* Botón */}
    <div className="flex items-start justify-end"> 
      <ButtonBase
        type="submit"
        className="submit-button px-16 py-6" 
      />
    </div>
    <div className="flex items-start justify-end text-xs italic text-gray-500 mr-2 mt-2">**Debes ser mayor de 18 años para registrarte</div>
    </div>
    </form>
        </FormProvider>
      </div>
      <img className="w-22 h-20 object-cover mr-6 opacity-30" src={methods.getValues().photoUrl} alt="Photo" />
    </main>
  );
}