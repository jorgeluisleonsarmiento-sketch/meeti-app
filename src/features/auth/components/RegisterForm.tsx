"use client"

import { useForm } from 'react-hook-form'
import { Form, FormError, FormInput, FormLabel, FormSubmit } from '@/components/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpinput, SignUpSchema } from '../schemas/AuthSchema'
import { signUpAction } from '../actions/auth-actions'
import toast from 'react-hot-toast'

export default function RegisterForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: 'onBlur'
    })


    const onSubmitRef = async (data: SignUpinput) => {
        const { error, success } = await signUpAction(data)
        console.log('error', error)
        if (error) {
            toast.error(error)
        }
        if (success) {
            toast.success(success)
            reset()
        }

    }

    return (
        <Form onSubmit={handleSubmit(onSubmitRef)}>
            <FormLabel htmlFor='name'>Nombre:</FormLabel>
            <FormInput id='name' type='text' placeholder='Ingrese el nombre'
                {...register("name")}
            />

            {errors.name && <FormError>{errors.name?.message}</FormError>}

            <FormLabel htmlFor='email'> Email:</FormLabel>
            <FormInput id='email' type='email' placeholder='Ingrese tu email'
                {...register("email")}
            />
            {errors.email && <FormError>{errors.email?.message}</FormError>}

            <FormLabel htmlFor='password'> Contraseña:</FormLabel>
            <FormInput id='password' type='password' placeholder='Ingresa tu contraseña'
                {...register("password")}
            />
            {errors.password && <FormError>{errors.password?.message}</FormError>}

            <FormLabel htmlFor='password_confirm'> Confirmar contraseña:</FormLabel>
            <FormInput id='password_confirm' type='password' placeholder='Confirma tu contraseña'
                {...register("passwordConfimation")}
            />
            {errors.passwordConfimation && <FormError>{errors.passwordConfimation?.message}</FormError>}

            <FormSubmit value="Registrarme" />
        </Form>
    )
}
