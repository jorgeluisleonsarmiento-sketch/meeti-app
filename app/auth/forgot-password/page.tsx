import { Heading } from "@/src/shared/components/typegraphy/Heading";
import { Metadata } from "next";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTiltle('recuperar acceso')
}

export default function ForgotPasswordPage() {
    return (
        <>
            <Heading>Recupera el acceso a Meeti</Heading>
            <ForgotPasswordForm />
            <nav className=" mt-20 flex justify-between">
                <Link href={'/auth/create-account'} className="font-bold">Crear cuenta</Link>
                <Link href={'/auth/login'} className="font-bold">Iniciar sesion</Link>
            </nav>
        </>
    )
}
