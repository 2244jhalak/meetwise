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

// export const PATCH = async (request) => {
//     const { meetingId, bookedTime } = await request.json(); // Expecting the meeting ID and booked time
//     try {
//         const db = await connectDB();
//         const meetingCollection = db.collection("meeting");

//         // Convert meetingId to ObjectId
//         const meetingObjectId = new ObjectId(meetingId);

//         const res = await meetingCollection.updateOne(
//             { _id: meetingObjectId }, // Match the meeting by ID
//             { 
//                 $addToSet: { // Use $addToSet to avoid duplicates
//                     "availability.$[].bookedTimes": bookedTime // Push the booked time into the bookedTimes array
//                 }
//             }
//         );

//         if (res.modifiedCount === 0) {
//             return Response.json(
//                 { message: "Meeting not found or no changes made" },
//                 { status: 404 }
//             );
//         }

//         return Response.json(
//             { message: "Meeting updated successfully" },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         return Response.json(
//             { message: "Something Went Wrong" },
//             { status: 500 }
//         );
//     }
// };