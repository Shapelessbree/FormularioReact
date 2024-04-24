import { User } from '@/app/models/user';
import * as yup from 'yup';



const requiredString = yup
    .string().
    typeError("*Debe ser un texto").
    required('*Campo obligatorio');

const requiredNumber = yup.
    number().
    typeError("*Debe ser un número")
    .required('*Campo obligatorio');


export const createUserSchema = yup.object<User>().shape({
    name: requiredString,
    lastName: requiredString,
    username: requiredString,
    email: yup.string().email('*Correo inválido').required('*Campo obligatorio'),
    password: requiredString,
    confPassword: requiredString.oneOf([yup.ref('password')], '*Las contraseñas deben ser iguales'),
    age: requiredNumber.min(18, '*Debes ser mayor de edad')
})                                                             