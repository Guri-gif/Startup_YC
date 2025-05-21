import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user, profile }) {
            try {
                const id = profile?.sub || profile?.id
                if (!id) return false

                const existingUser = await client.fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: id })

                if (!existingUser) {
                    await writeClient.create({
                        _type: 'author',
                        googleId: id,
                        name: user.name,
                        username: profile?.login || user.email?.split('@')[0],
                        image: user.image,
                        email: user.email,
                        bio: profile?.bio || ''
                    })
                }

                return true
            } catch (error) {
                console.error("Sign in error:", error)
                return false
            }
        },

        async jwt({ token, account, profile }) {
            if (profile?.sub) {
                const user = await client.fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: profile.sub })
                if (user) {
                    token.id = user._id
                }
            }
            return token
        },

        async session({ session, token }) {
            if (token.id && session.user) {
                session.user.id = token.id
            }
            return session
        }
    }
})

declare module "next-auth" {
    interface Session {
        user: {
            id: string
        } & DefaultSession["user"]
    }

    interface JWT {
        id?: string
    }
}