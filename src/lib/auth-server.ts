import { headers } from "next/headers"
import { connection } from "next/server"
import { auth } from "./auth"

// Revision si un usuario esta autenticado

export async function getServerSession() {
    await connection()
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    return session
}

export async function requiredAuth() {
    const session = await getServerSession()
    return {
        session,
        isAuth: !!session
    }

}

