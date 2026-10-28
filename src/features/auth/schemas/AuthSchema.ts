import z from 'zod'

export const BaseAuthSchema = z.object({
    name: z.string().trim()
        .min(1, { error: "El nombre es obligatorio" }),
    email: z.email({ error: "El correo no es valido" }),
    password: z.string().trim().min(8, { error: "El password debe tener al menos 8 caracteres" }),
    passwordConfimation: z.string().trim().min(1, { error: 'La confimacion de password no puede ir vacio' })
})

export const SignInSchema = BaseAuthSchema.pick({
    email: true,

}).extend({
    password: z.string().trim().min(1, { error: 'El password es obligatorio' })
})

export type SignInInput = z.infer<typeof SignInSchema>


export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfimation: true
}).refine((data) => data.password === data.passwordConfimation, {
    error: 'Las contraseñas no son iguales',
    path: ['passwordConfimation']
})

// Types
export type SignUpinput = z.infer<typeof SignUpSchema>