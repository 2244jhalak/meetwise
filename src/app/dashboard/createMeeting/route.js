import { connectDB } from "@/app/lib/connectDB";

export const POST = async (request) => {
    const meeting = await request.json();
    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");
        
        const res = await meetingCollection.insertOne(meeting);
        return Response.json(
            { message: "Meeting Created" },
            { status:200 }
        )
    } catch (error) {
        return Response.json(
            { message: "Something Went Wrong" },
            { status:500 }
        )
    }
}