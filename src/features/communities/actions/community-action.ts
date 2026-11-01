"use server"
import { requiredAuth } from "@/src/lib/auth-server";
import { CommunityInput, CommunitySchema } from "../schema/communitySchema";
import { communityService } from "../services/CommunityService";

export async function createCommunityAction ( input: CommunityInput) {
      const data = CommunitySchema.safeParse(input)

      if(!data.success) {
        return {
          error: 'hubo un error',
          success:''       }
      }

      const { session} = await requiredAuth()

      
      if (!session) {
        return {
          error: 'hubo un error',
          success:''       }
      }

      await communityService.createCommunity(data.data, session.user.id)
      return{
        error: '',
        success: 'Comunidad creada satisfactoriamente'
      }
     }