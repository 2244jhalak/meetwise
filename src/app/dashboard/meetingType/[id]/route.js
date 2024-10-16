// File: /app/api/dashboard/meetingType/[id]/route.js

import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

// Fetch meeting details
export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");
        const meeting = await meetingCollection.findOne({ _id: new ObjectId(id) });

        if (!meeting) {
            return new Response(JSON.stringify({ message: "Meeting not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(meeting), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};

// Delete a meeting
export const DELETE = async (request, { params }) => {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
        return new Response(JSON.stringify({ message: "Invalid ID format" }), { status: 400 });
    }

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");
        const result = await meetingCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return new Response(JSON.stringify({ message: "Meeting not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Meeting deleted successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};
