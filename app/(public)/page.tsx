import Hero from "@/components/ui/Hero";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: generatePageTiltle("Inicio"),
  description: "Plataforma para crear y gestionar eventos",
}

// http://localhost:3000
export default function Home() {


  return (
    <Hero />

  );
}
