import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms";
import FormTextArea from "@/src/shared/components/forms/FormTextArea";
import { useFormContext } from "react-hook-form";
import { CommunityInput } from "../schema/communitySchema";

export default function CommunityForm() {
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
