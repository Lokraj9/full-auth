import NextAuth from "next-auth/next";
import connectDB from "@/utils/database";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/userModel"
connectDB()
export const authOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    pages:{
        signIn:'/signin'
    },
    callback:{
        async signIn({user ,account,profile,email,credentials}){
            console.log({account,profile})
            return true
        },
        async jwt ({token,trigger,session}){
            return token
        },
        async session ({session,token}){
            return session;
        }

    }
    
}
const handler=NextAuth(authOptions);
export {handler as GET,handler as POST}

async function signInWithOAuth({account,profile}){
    const user=await User.findOne({email:profile.email})
    if(user) return true;//signin
    //if !user =>signup
    const newUser=new User({
        name:profile.name,
        email:profile.email,
        image:profile.picture,
        provider:account.provider
    })
    await newUser.save();
    return true;
}
