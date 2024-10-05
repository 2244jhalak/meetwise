import { connectDB } from "@/app/lib/connectDB";


export const GET = async (request, { params }) => {
    const email = params.email;

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");

        // Find all documents with the same email
        const meeting = await meetingCollection.find({ email }).toArray(); // fetches all matching documents
        console.log("hit", meeting);

        if (meeting.length === 0) {
            return Response.json({ message: "Meeting not found" }, { status: 404 });
        }

        return Response.json(meeting, { status: 200 }); // Return all the documents as JSON
    } catch (error) {
        return Response.json({ message: "Something Went Wrong" }, { status: 500 });
    }
}