"use server"


import { success } from "zod"
import { SignInInput, SignInSchema, SignUpinput, SignUpSchema } from "../schemas/AuthSchema"
import { authService } from "../services/AuthService"

export async function signUpAction(input: SignUpinput) {
    const data = SignUpSchema.safeParse(input) // se utiliza parse si esta 100% que no hay erorres en los datos que pasen
    if (!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    const response = await authService.register(data.data)
    return response



}

export async function signInAction(input: SignInInput) {
    const data = SignInSchema.safeParse(input)

    if (!data.success) {
        return {
            error: 'Hubo un error',
            success: ''
        }
    }

    console.log('Dato validated', data.data)
    const response = await authService.login(data.data)

    return response
}