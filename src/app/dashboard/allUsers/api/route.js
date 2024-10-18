import { connectDB } from "@/app/lib/connectDB";
export const dynamic = 'force-dynamic'; 
export const revalidate = 1;

export const GET = async () => {
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const users = await userCollection.find().toArray(); // Fetch all users

        // Return JSON response with no-cache headers
        return new Response(
            JSON.stringify({ message: "Users fetched successfully", data: users }),
            { 
                status: 200,
                headers: { 
                    "Content-Type": "application/json",
                    'Cache-Control': 'no-store'
                }
            }
        );
    } catch (error) {
        // Return error response
        return new Response(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { 
                status: 500,
                headers: { 
                    "Content-Type": "application/json",
                    'Cache-Control': 'no-store'
                }
            }
        );
    }
};
