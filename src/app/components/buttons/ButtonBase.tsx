export function ButtonBase(
    { ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button {...props} className="bg-black text-red-200 px-3 py-2.5 rounded-md">
            Registrarse
        </button>
    )
}
