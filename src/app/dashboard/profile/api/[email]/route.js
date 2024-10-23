// pages/api/update-session.js

import { connectDB } from "@/app/lib/connectDB";
export const dynamic = 'force-dynamic'; 
export const revalidate = 1;

export const PATCH = async (request) => {
    try {
        const { name,title,description, image, email } = await request.json();
        console.log(name,title, image,description, email);
        const db = await connectDB();
        const usersCollection = db.collection("users");

        const result = await usersCollection.updateOne(
            { email: email },
            { $set: { name: name, image: image,title:title,description:description } }
        );

        if (result.matchedCount === 0) {
            return Response.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        // নতুন ইউজার ডেটা ফেরত দিন
        const updatedUser = { email, name, image,title,description }; // নতুন তথ্য নিয়ে তৈরি করুন
        return Response.json(
            { message: "User info updated successfully", user: updatedUser },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating user:", error);
        return Response.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
};
