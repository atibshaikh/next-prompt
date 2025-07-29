import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";


// console.log({
//     clientId:process.env.GOOGLE_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET,
// })
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,    
        })
    ],
    callbacks:{
        async session ({session}){
            const sessionUser = await User.findOne({
                email:session.user.email
            })
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn( {profile}){
            console.log("Google Profile:", profile)
            try{
                await connectToDB();

                if (!profile?.email) {
                    console.log("No email found in profile");
                    return false; // Deny sign-in if email is missing
                }
    
                //check if user already exist
                const userExists = await User.findOne({
                    email:profile.email
                });
    
                //if no user create new user
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image:profile.picture
                    });
                }
    
                //if not create user
                return true;
            }catch (error){
                console.log("Error checking if user exists",error);
                return false;
            }
        },
    }
    

})

export { handler as GET, handler as POST }