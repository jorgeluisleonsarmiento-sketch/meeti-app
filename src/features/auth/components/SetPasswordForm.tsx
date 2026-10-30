"use client"

import { Form, FormError, FormInput, FormLabel } from "@/src/shared/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect, useSearchParams } from "next/navigation"
import { useForm } from 'react-hook-form'
import toast from "react-hot-toast"
import { setPasswordAction } from "../actions/auth-actions"
import { resetAndConfimPasswordSchema, resetConfirmPassword } from "../schemas/AuthSchema"

export default function SetPasswordForm() {

    const searchPArams = useSearchParams()

    const token = searchPArams.get('token')

    if (!token) {
        redirect(`/auth/forgot-password`)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(resetAndConfimPasswordSchema),
        mode: 'all',
    })

    const onSubmit = async (data: resetConfirmPassword) => {
        const { error, success } = await setPasswordAction(data, token)

        if (error) {
            toast.error(error)
        }

        if (success) {
            toast.success(success)
            redirect('/auth/login')
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="newPassword"> Nuevo Password</FormLabel>
            <FormInput
                type="password"
                id="newPassword"
                placeholder="Ingresa tu nuevo password"
                {...register('newPassword')}
            ></FormInput>
            {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}

            <FormLabel htmlFor="passwordConfimation"> Repetir Password</FormLabel>
            <FormInput
                type="password"
                id="passwordConfimation"
                placeholder="Confirme el nuevo password"
                {...register('passwordConfimation')}
            ></FormInput>
            {errors.passwordConfimation && <FormError>{errors.passwordConfimation.message}</FormError>}


            <FormInput value={'Restablecer password'} />

        </Form>
    )
}
