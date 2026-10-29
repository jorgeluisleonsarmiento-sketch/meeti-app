import { requiredAuth } from "@/src/lib/auth-server";
import { Heading } from "@/src/shared/components/typegraphy/Heading";
import { redirect } from "next/navigation";

export const instant = false;

export default async function DashboardPage() {
    const { isAuth } = await requiredAuth();

    if (!isAuth) {
        redirect("/auth/login");
    }

    return <Heading>Panel de administración</Heading>;
}
