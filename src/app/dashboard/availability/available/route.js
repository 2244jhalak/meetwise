import { connectDB } from "@/app/lib/connectDB";



export const POST = async (request) => {
    try {
        const db = await connectDB();
        const availabilityCollection = db.collection('available');
        
        const available = await request.json();
        console.log("Received data:", available);

        const result = await availabilityCollection.insertOne(available);
        console.log("Insertion result:", result);

        return new Response(
            JSON.stringify({ message: "Availability Created" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error creating availability:", error);  // Log the exact error
        
        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
