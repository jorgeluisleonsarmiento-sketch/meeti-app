import CreateCommunity from "@/src/features/communities/components/CreateCommunity";
import { Heading } from "@/src/shared/components/typegraphy/Heading";
import { generatePageTiltle } from "@/src/shared/utils/Metadata";
import { Metadata } from "next";
import Link from "next/link";

const title = "Crea tus comunidades";
export const metadata: Metadata = {
  title: generatePageTiltle(title),
};

export default function CreateComunityPage() {
  return (
    <>
      <Heading> {title} </Heading>
      <div className="flex justify-between flex-col lg:flex-row">
        <Link
          href="/dashboard/communities"
          className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold"
        >
          Volver a mis Comunidades
        </Link>
      </div>
      <CreateCommunity />
    </>
  );
}
