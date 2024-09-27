import { connectDB } from "@/app/lib/connectDB";

// Handle PUT and GET requests
export const PUT = async (request) => {
    try {
        const db = await connectDB();
        const availabilityCollection = db.collection('available');
        
        const available = await request.json();
        console.log("Received data for update:", available);

        // Update the availability based on the email
        const filter = { email: available.email };
        const update = {
            $set: {
                name: available.name,
                startTime: available.startTime,
                endTime: available.endTime,
                days: available.days,
            },
        };

        const result = await availabilityCollection.updateOne(filter, update, { upsert: true });
        console.log("Update result:", result);

        return new Response(
            JSON.stringify({ message: "Availability Updated" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error updating availability:", error);

        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};

export const GET = async (request) => {
    try {
        const db = await connectDB();
        const availabilityCollection = db.collection('available');
        
        // Get email from query params
        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");

        if (!email) {
            return new Response(
                JSON.stringify({ message: "Email is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Find availability by email
        const available = await availabilityCollection.findOne({ email });

        if (!available) {
            return new Response(
                JSON.stringify({ message: "No availability found for this user" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify(available),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error fetching availability:", error);

        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
