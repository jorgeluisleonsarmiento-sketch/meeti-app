import SetPasswordForm from "@/src/features/auth/components/SetPasswordForm";
import { Heading } from "@/src/shared/components/typegraphy/Heading";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTiltle('Definir nuevo password')
}

export default function ResetPasswordPage() {
    return (
        <>
            <Heading>Definir nuevo password para  Meeti</Heading>
            <SetPasswordForm />
            <nav className=" mt-20 flex justify-between">
                <Link href={'/auth/create-account'} className="font-bold">Crear cuenta</Link>
                <Link href={'/auth/login'} className="font-bold">Iniciar sesion</Link>
            </nav>
        </>
    )
}
