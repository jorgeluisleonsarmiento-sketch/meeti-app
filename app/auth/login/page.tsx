import LoginForm from "@/src/features/auth/components/LoginForm";
import { Heading } from "@/src/shared/components/typegraphy/Heading";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTiltle("Iniciar Sesión")
}

export default function LoginPage() {
    return (
        <>
            <Heading>Iniciar Sesión</Heading>
            <LoginForm />
            <nav className=" mt-20 flex justify-between">
                <Link href={'/auth/create-account'} className="font-bold">Crear cuenta</Link>
                <Link href={'/auth/forgot-password'} className="font-bold">Olvide mi password</Link>
            </nav>
        </>
    )
}