import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

// DELETE method to delete a meeting by ID
export const DELETE = async (req, { params }) => {
    const { id } = params; // Extract meeting ID from URL

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
        return new Response(
            JSON.stringify({ message: "Invalid meeting ID format" }),
            { status: 400, headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } }
        );
    }

    let meetingId = new ObjectId(id); // Convert string ID to ObjectId

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");

        // Delete the meeting
        const result = await meetingCollection.deleteOne({ _id: meetingId });

        if (result.deletedCount === 0) {
            return new Response(
                JSON.stringify({ message: "Meeting not found" }),
                { status: 404, headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } }
            );
        }

        return new Response(
            JSON.stringify({ message: "Meeting deleted successfully" }),
            { status: 200, headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } }
        );
    } catch (error) {
        console.error('Error deleting meeting:', error);
        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500, headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } }
        );
    }
};
