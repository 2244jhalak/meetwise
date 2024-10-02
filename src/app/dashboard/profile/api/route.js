import { connectDB } from "@/app/lib/connectDB";

export const PATCH = async (request) => {
    try {
        const { name, image, email } = await request.json();
        const db = await connectDB();
        const usersCollection = db.collection("users");

        const result = await usersCollection.updateOne(
            { email: email },
            { $set: { name: name, image: image } }
        );

        if (result.matchedCount === 0) {
            return Response.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "User info updated successfully" },
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
