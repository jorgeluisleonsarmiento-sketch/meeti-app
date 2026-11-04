"use client";

import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms";
import FormTextArea from "@/src/shared/components/forms/FormTextArea";

import { useFormContext } from "react-hook-form";
import { CommunityInput } from "../schema/communitySchema";
import { UploadDropzone } from "@/src/shared/utils/uploadthing";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";

export default function CommunityForm() {
  const [uploadImage, setUploadImage] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext<CommunityInput>();

  return (
    <>
      <FormLabel htmlFor="name"> Nombre de la comunidad</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Titulo comunidad"
        {...register("name")}
      />
      {errors.name && <FormError>{errors.name?.message}</FormError>}

      <UploadDropzone
        endpoint={"meetiUploader"}
        className="ut-button:bg-orange-600 text-white hover:ut-button:bg-orange-700"
        onClientUploadComplete={(res) => {
          setUploadImage(res[0].ufsUrl);
          console.log(res[0].ufsUrl);
        }}
        appearance={{
          button:
            "font-black py-3 w-full block h-auto rounded-none after:bg-orange-500 after:h-2 after:top-0",
          label: "text-sm text-gray-600 hover:text-gray-600",
          allowedContent: "text-sm",
        }}
        content={{
          button: "Selecciona tu imagen",
          label: "Escoje un archivo y arrastralo aqui",
          allowedContent: "Imagen de tamanio maximo a 2Mb",
        }}
        config={{
          cn: twMerge,
          mode: "auto",
        }}
      />
      {uploadImage && (
        <>
          <p className=" text-lg font-bold">Imagen nueva</p>
          <Image
            src={uploadImage}
            alt="Image subida"
            width={300}
            height={200}
          />
        </>
      )}
      <FormLabel htmlFor="description"> Descripcion de la comunidad</FormLabel>
      <FormTextArea
        id="description"
        placeholder="Describe la comunidad"
        {...register("description")}
      />
      {errors.description && (
        <FormError>{errors.description?.message}</FormError>
      )}
    </>
  );
}
