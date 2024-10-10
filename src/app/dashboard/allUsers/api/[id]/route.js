import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from 'mongodb';

export const PATCH = async (req, { params }) => {
    const { id } = params; // Extract the user ID from the URL
    const { role } = await req.json(); // Extract role from request body

    // Validate the request data
    if (!id || !role) {
        return new Response(JSON.stringify({ message: "ID and role are required" }), { status: 400 });
    }

    let userId;
    try {
        // Convert the string ID to ObjectId
        userId = new ObjectId(id);
    } catch (error) {
        return new Response(JSON.stringify({ message: "Invalid user ID" }), { status: 400 });
    }

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        // Update user role
        const result = await userCollection.updateOne(
            { _id: userId }, // Match the user by ObjectId
            { $set: { role } } // Set the new role
        );

        if (result.modifiedCount === 0) {
            return new Response(
                JSON.stringify({ message: "User not found or role unchanged" }),
                { status: 400 }
            );
        }

        return new Response(JSON.stringify({ message: "Role updated successfully" }), { status: 200 });
    } catch (error) {
        console.error('Error updating role:', error);
        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500 }
        );
    }
};
