import { betterAuth } from "better-auth"
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db } from '../db/index'
import * as schema from '../db/schema'

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true,
        schema: {
            users: schema.users,
            sessions: schema.sessions,
            accounts: schema.accounts,
            verifications: schema.verifications,
        },
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    plugins: [nextCookies()],
})

//export type User = typeof auth.$Infer.Session.user se movio a interface/index.ts 
