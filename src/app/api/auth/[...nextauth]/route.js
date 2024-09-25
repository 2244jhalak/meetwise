import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
// import GitHubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt";

const handler = NextAuth({
   secret: process.env.NEXTAUTH_SECRET,
   session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60,
   },
   providers: [
      CredentialsProvider({
         credentials: {
            email: {},
            password: {},
         },
         async authorize(credentials) {
            const { email, password } = credentials;
            if (!email || !password) {
               return null;
            }
            const db = await connectDB();
            const currentUser = await db.collection('users').findOne({ email });
            if (!currentUser) {
               return null;
            }
            const passwordMatched = bcrypt.compareSync(password, currentUser.password);
            if (!passwordMatched) {
               return null;
            }
            return currentUser;
         },
      }),
      GoogleProvider({
         clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
         clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
      }),
      // GitHubProvider({
      //    clientId: process.env.GITHUB_ID,
      //    clientSecret: process.env.GITHUB_SECRET
      // })
   ],
   callbacks: {
      async jwt({ token, user }) {
         // প্রথমবার লগইন করলে user এর তথ্য JWT টোকেনে যোগ করা হচ্ছে
         if (user) {
            token.id = user._id;
            token.image = user.image; // ডাটাবেজ থেকে পাওয়া photoUrl যোগ করা হচ্ছে
         }
         return token;
      },
      async signIn({user,account}){
         if(account.provider==='google'){
            const {name,email,image} = user;
            try {
              const db = await connectDB();
              const usersCollection = db.collection("users");
              const userExist = await usersCollection.findOne({email});
              if(!userExist){
                const res = await usersCollection.insertOne(user);
                return user;
              }
              else{
               return user;
              }
            } catch (error) {
               console.log(error);
            }
         }
         else{
            return user;
         }
      },
      async session({ session, token }) {
         // সেশন কাস্টমাইজ করা হচ্ছে, এখানে photoUrl যোগ করা হচ্ছে
         session.user.id = token.id;
         session.user.image = token.image; // JWT থেকে photoUrl সেশনে যোগ করা হচ্ছে
         return session;
      },
   },
   pages: {
      signIn: '/login',
   },
});

export { handler as GET, handler as POST };
