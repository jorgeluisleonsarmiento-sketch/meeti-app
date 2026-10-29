import Hero from "@/components/ui/Hero";
import { auth } from "@/src/lib/auth";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import { Metadata } from "next";
import { headers } from "next/headers";


export const metadata: Metadata = {
  title: generatePageTiltle("Inicio"),
  description: "Plataforma para crear y gestionar eventos",
}

// http://localhost:3000
export default async function Home() {


  return (
    <>
      <Hero />

    </>
  );
}
