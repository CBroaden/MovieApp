
import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials

        const user = { id: "001", name: "nextjsdev", password: "12345678" }

        if (credentials?.username === user.name && credentials?.password === 
           user.password) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ],

    theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
      }
}