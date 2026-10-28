"use client"

import { useForm } from 'react-hook-form'

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms"
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInInput, SignInSchema } from '../schemas/AuthSchema'
import { signInAction } from '../actions/auth-actions'
import toast from 'react-hot-toast'

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(SignInSchema),
        mode: 'all'
    })

    const onSubmit = async (data: SignInInput) => {
        const { success, error } = await signInAction(data)

        if (error) {
            toast.error(error)
        }
        if (success) {
            toast.success(success)
            reset()
        }
    }


    return (
        <Form className="shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="email" className="block">E-mail</FormLabel>
            <FormInput type="email" id="email"
                placeholder="Ingresa tu E-mail"
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormLabel htmlFor="password"
                className="block">Password</FormLabel>
            <FormInput
                type="password"
                id="password"
                placeholder="Ingresa tu Password"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormSubmit value="Iniciar Sesión" />

        </Form>
    )
}
