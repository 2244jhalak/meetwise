import { connectDB } from "@/app/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        // Check if user already exists
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return Response.json(
                { message: "User Exists" },
                { status: 409 } // Conflict
            );
        }

        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(newUser.password, 14);

        // Insert new user into the collection
        await userCollection.insertOne({
            ...newUser,
            password: hashedPassword,
        });

        return Response.json(
            { message: "User Created" },
            { status: 201 } // Created
        );
    } catch (error) {
        console.error("Error during user signup:", error); // Log the error for debugging
        return Response.json(
            { message: "Something Went Wrong" },
            { status: 500 } // Internal Server Error
        );
    }
};
