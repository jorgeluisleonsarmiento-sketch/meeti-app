import { CommunityInput } from "../schema/communitySchema";
import { ICommunityRepository,communityRepository } from "./CommunityRepository";


class CommunityService {

  constructor( private communityRepository: ICommunityRepository) {}
  
  async createCommunity (input : CommunityInput, userID: string) {
      
    const community = await this.communityRepository.create({
      ...input, createdBy: userID
    })
    return community
  }
  
}

export const communityService = new CommunityService(communityRepository)