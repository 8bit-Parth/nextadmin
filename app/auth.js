import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";

const login = async (credentials)=> {
    try{
        connectToDB()
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new Error("Wrong credentials!")

    } catch(err){
        console.log(err)
        throw new Error("Failed to login!")
    }
};

export const{ signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) { },
        }),
    ],
});