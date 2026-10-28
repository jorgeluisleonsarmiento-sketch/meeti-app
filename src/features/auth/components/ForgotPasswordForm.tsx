import { Form, FormInput, FormLabel, FormSubmit } from '@/src/shared/components/forms'
import React from 'react'

export default function ForgotPasswordForm() {
    return (
        <Form>
            <FormLabel>E-email</FormLabel>
            <FormInput type='email'
                id='email'
                placeholder='Ingresa tu email' />
            <FormSubmit value={'Enviar Instrucciones'} />
        </Form>
    )
}
