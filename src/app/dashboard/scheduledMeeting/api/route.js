import { connectDB } from "@/app/lib/connectDB";

export const GET = async (req) => {
  console.log(req.url.searchParams);
  try {
    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const result = await bookingCollection.find().toArray();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
