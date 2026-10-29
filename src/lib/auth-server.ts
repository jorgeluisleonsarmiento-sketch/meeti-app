import { headers } from "next/headers"
import { auth } from "./auth"

// Revision si un usuario esta autenticado

export async function getServerSession() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    console.log('session', session)
    return session
}

export async function requiredAuth() {
    const session = await getServerSession()
    return {
        session,
        isAuth: !!session
    }

}

