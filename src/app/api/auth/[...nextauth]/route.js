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
                        // Add any other fields as necessary
                    });
                }
                return {
                    id: profile.sub, // Use the Google user ID
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }; // Return the profile to be used in the session
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Use the user ID from the profile
                token.image = user.image;
                token.name = user.name; // Save the name in the token
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.image = token.image;
            session.user.name = token.name; // Include the name in the session
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Redirect to /dashboard after login
            if (url === baseUrl) {
                return `${baseUrl}/dashboard`;
            }
            return url;
        },
    },
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };
