import { db } from "@/src/db"
import type { User } from "../types"

export interface IAuthRepository {
    userExist(email: string): Promise<User | undefined>
}

class AuthRepository implements IAuthRepository {

    async userExist(email: string) {
        return await db.query.users.findFirst({
            where: { email }
        })

    }
}


export const authRepository = new AuthRepository()