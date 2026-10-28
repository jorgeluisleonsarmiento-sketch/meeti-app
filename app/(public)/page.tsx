import Hero from "@/components/ui/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Meeti - inicio",
  description: "Plataforma para crear y gestionar eventos",
}

// http://localhost:3000
export default function Home() {
  return (
    <>
      <Hero />

    </>
  );
}
