import Header from "@/components/ui/Header";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import type { Metadata } from "next";





export const metadata: Metadata = {
    title: generatePageTiltle("Next"),
    description: "Proyecto Meeti Next, drizzle",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
