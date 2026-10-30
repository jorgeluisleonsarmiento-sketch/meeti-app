"use client"

import { Form, FormError, FormInput, FormLabel, FormSubmit } from '@/src/shared/components/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { forgotPasswordAction } from '../actions/auth-actions'
import { ForgotPassword, ForgotPasswordSchema } from '../schemas/AuthSchema'

export default function ForgotPasswordForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: 'all'
    })


    const onSubmit = async (data: ForgotPassword) => {
        const { error, success } = await forgotPasswordAction(data)

        if (error) {
            toast.error(error)
            return
        }

        if (success) {
            toast.success(success)
        }


    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>E-email</FormLabel>
            <FormInput type='email'
                id='email'
                placeholder='Ingresa tu email'
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <FormSubmit value={'Enviar Instrucciones'} />
        </Form>
    )
}
