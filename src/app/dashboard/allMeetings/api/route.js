import { connectDB } from "@/app/lib/connectDB";


export const GET = async () => {
    try {
        const db = await connectDB();
        const meetingCollection = db.collection("meeting");
        const meteting = await meetingCollection.find().toArray(); // Fetch all users

        // Return JSON response with no-cache headers
        return new Response(
            JSON.stringify({ message: "Meetings fetched successfully", data: meteting }),
            { 
                status: 200,
                headers: { 
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate", 
                    "Pragma": "no-cache",
                    "Expires": "0",
                    "Surrogate-Control": "no-store"
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
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate", 
                    "Pragma": "no-cache",
                    "Expires": "0",
                    "Surrogate-Control": "no-store"
                }
            }
        );
    }
};
