import { auth } from "@/src/lib/auth"
import { APIError } from "better-auth"
import { headers } from "next/headers"
import { ForgotPassword, resetConfirmPassword, SignInInput, SignUpinput } from "../schemas/AuthSchema"
import { authRepository, IAuthRepository } from "./AuthRepository"


class AuthService {

    constructor(
        private authRepository: IAuthRepository
    ) { }

    async register(credentials: SignUpinput) {
        const { name, email, password } = credentials

        // await authRepository.userExist(email) esto no se debe hacer
        const user = await this.authRepository.userExist(email) // pero esta bien por que esta utilizando la interfaqz
        if (user) {
            return {
                error: 'Esa cuenta ya se encuentra registrada',
                success: ''
            }
        }
        // TODO validaciones de negocio

        // TODO manejar el registro
        // try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name,
                callbackURL: '/dashboard'

            },
            headers: await headers()
        })
        /* } catch (error) {
             if (error instanceof APIError) {
                 console.log('error del try', error)
                 return {
                     error: error.message,
                     success: ''
                 }
             }
         } */


        return {
            error: '',
            success: 'Cuenta creada correctamente revisa tu email'
        }
    }

    async login(credentials: SignInInput) {
        const { email, password } = credentials
        const user = await this.authRepository.userExist(email) // pero esta bien por que esta utilizando la interfaqz
        if (!user) {
            return {
                error: 'Credenciales invalidas',
                success: ''
            }
        }

        // TODO verificar el passoword y si confirmo la cuenta  
        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: '/dashboard'
                },
                headers: await headers()
            })
            return {
                error: '',
                success: 'Sesion iniciada correctamente'
            }
        } catch (error) {
            if (error instanceof APIError) {
                const messagesError: Record<number, string> = {
                    401: 'Credenciales invalidas',
                    403: 'Tu cuenta no ha sido verificada, hemos enviado un email'
                }
                if (messagesError) {
                    return {
                        error: messagesError[error.statusCode],
                        success: ''
                    }
                }

            }
        }
        return {
            error: '',
            success: 'Exito'
        }
    }

    async requestPasswordEmail(credentials: ForgotPassword) {
         const { email } = credentials
        const user = await this.authRepository.userExist(email) 
        if (!user) {
            return {
                error: 'Informacion incorrecta, el usuario no existe',
                success: ''
            }
        }

        await auth.api.requestPasswordReset({
            body: { email }
        })
        return {
            error:'',
            success: 'Hemos enviado un email con instrucciones para restablecer tu password, revisa tu bandeja de entrada'
        }
    }

    async confirmPasswordReset(credentials: resetConfirmPassword, token: string) {
        try {
           await auth.api.resetPassword({
            body: {
                newPassword: credentials.newPassword,
                token
            }
           })

            return {
                    error: '',
                    success: 'password restablesido correctamente'
                }
        } catch (error) {
            if (error instanceof APIError) {
                return {
                    error: 'token no valido',
                    success: ''
                }
            }

        }

        return {
            success: '',
            error: ''
        }
    }
}

export const authService = new AuthService(authRepository)