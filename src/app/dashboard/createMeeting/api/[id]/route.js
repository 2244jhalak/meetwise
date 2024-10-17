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


export const PATCH = async (request, { params }) => {
    const { id } = params; // URL থেকে মিটিং এর ID পাবে

    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");

        // Request body থেকে data ফেচ করা
        const updateData = await request.json();

        const { selectedDate, bookedTimeSlot } = updateData; // JSON থেকে date এবং bookedTimeSlot নেয়া

        // Update করার জন্য meeting document টা fetch করা
        const meeting = await meetingCollection.findOne({ _id: new ObjectId(id) });

        if (!meeting) {
            return new Response(JSON.stringify({ message: "Meeting not found" }), { status: 404 });
        }

        // Availability update logic
        const availability = meeting.availability || {};
        const selectedAvailability = availability[selectedDate] || { bookedTimes: [] };

        // Ensure bookedTimes is initialized
        if (!selectedAvailability.bookedTimes) {
            selectedAvailability.bookedTimes = [];
        }

        // Check if the booked time slot already exists to avoid duplicates
        if (!selectedAvailability.bookedTimes.includes(bookedTimeSlot)) {
            selectedAvailability.bookedTimes.push(bookedTimeSlot); // Directly add bookedTimeSlot to bookedTimes
        }

        // Update the meeting document in the database
        await meetingCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { availability: { ...availability, [selectedDate]: selectedAvailability } } } // Update availability
        );

        return new Response(JSON.stringify({ message: "Meeting updated successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error updating meeting:", error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};



