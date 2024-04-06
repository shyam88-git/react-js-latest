

import { FieldError, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod'
export type FormData = {
    email: string;
    githubUrl: string;
    // yearsOfExperience: number;
    password: string;
    confirmPassword: string;
}
export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: validFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;

}
export type validFieldNames =
    | "email" | "githubUrl" | "password" | "confirmPassword"



export const UserSchema: ZodType<FormData> = z.object({
    email: z.string().email(),
    githubUrl: z.string().url().includes("github.com", { message: 'Invalid Github URL' }),
    // yearsOfExperience: z.number({
    //     required_error: 'required field',
    //     invalid_type_error: 'Years of experience is required'
    // }).min(1).max(10),
    password: z.string().min(8, { message: 'Password is too Short' }).max(20, { message: 'Password is too long' }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {

    message: 'Password is not match',
    path: ['confirmPassword'],
})