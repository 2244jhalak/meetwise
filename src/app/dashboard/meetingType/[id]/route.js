import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";


// Backend DELETE endpoint: Check for successful deletion
export const DELETE = async (request, { params }) => {
    const { id } = params;
    console.log("Received ID for deletion:", id);

    // Validate the ID
    if (!ObjectId.isValid(id)) {
        return new Response(JSON.stringify({ message: "Invalid ID format" }), { status: 400 });
    }

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");

        if (!ObjectId.isValid(id)) {
            return new Response(JSON.stringify({ message: "Invalid ID format" }), { status: 400 });
        }

        const result = await meetingCollection.deleteOne({ _id: new ObjectId(id) });
        console.log("Delete result:", result);

        if (result.deletedCount === 0) {
            return new Response(JSON.stringify({ message: "Meeting not found" }), { status: 404 });
        }
        

        return new Response(JSON.stringify({ message: "Meeting deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error during deletion:", error);
        return new Response(JSON.stringify({ message: "Something Went Wrong" }), { status: 500 });
    }
};