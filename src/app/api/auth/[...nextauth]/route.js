import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    cache:false,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    throw new Error("Email and password are required.");
                }

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });

                if (!currentUser) {
                    throw new Error("No user found with the given email.");
                }

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    throw new Error("Invalid password.");
                }

                return currentUser;
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            async profile(profile) {
                const db = await connectDB();
                const user = await db.collection('users').findOne({ email: profile.email });

                if (!user) {
                    // If the user doesn't exist, create a new user
                    await db.collection('users').insertOne({
                        name: profile.name,
                        email: profile.email,
                        image: profile.picture,
                        role: 'user', // Default role when a user is created
                    });
                }

                return {
                    id: profile.sub, // Use the Google user ID
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: user ? user.role : 'user', // Set role
                }; 
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id;  // User ID
                token.image = user.image;
                token.name = user.name;
                token.role = user.role; // Add role to the token
            }
            return token; // Return updated token
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.image = token.image;
            session.user.name = token.name;
            session.user.role = token.role; // Add role to the session
            const db = await connectDB();
            const currentUser = await db.collection('users').findOne({ email: token.email });

            if (currentUser) {
                // Update session with the latest user information
                session.user.name = currentUser.name;
                session.user.image = currentUser.image;
                session.user.role = currentUser.role; // Update role if changed
                session.user.title = currentUser.title; 
                session.user.description = currentUser.description; 
                // Add any other fields you want to update
            }

            console.log('Updated session:', currentUser.name); // Log the updated session
            return session;
        },
        
    },
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };

