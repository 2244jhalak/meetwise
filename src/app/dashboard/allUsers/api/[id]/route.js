import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from 'mongodb';

export const PATCH = async (req, { params }) => {
    const { id } = params; // Extract the user ID from the URL
    const { role } = await req.json(); // Extract role from request body

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        // Convert the string ID to ObjectId
        const userId = new ObjectId(id);

        // Update user role
        const result = await userCollection.updateOne(
            { _id: userId }, // Match the user by ObjectId
            { $set: { role } } // Set the new role
        );

        if (result.modifiedCount === 0) {
            return Response.json(
                { message: "User not found or role unchanged" },
                { status: 400 }
            );
        }

        return Response.json(
            { message: "Role updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating role:', error);
        return Response.json(
            { message: "Something went wrong", error: error.message },
            { status: 500 }
        );
    }
};
