import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb"; // ObjectId ব্যবহার করতে হবে MongoDB id ফেচ করতে

export const GET = async (request, { params }) => {
    const { id } = params; // URL থেকে মিটিং এর ID পাবে

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");

        // MongoDB এর ObjectId ব্যবহার করে মিটিং ফেচ করা
        const meeting = await meetingCollection.findOne({ _id: new ObjectId(id) }); // _id দিয়ে ডকুমেন্ট ফেচ

        if (!meeting) {
            return new Response(JSON.stringify({ message: "Meeting not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(meeting), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};
