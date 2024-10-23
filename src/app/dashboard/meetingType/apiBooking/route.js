import { connectDB } from "@/app/lib/connectDB";

export const POST = async (request) => {
  const booking = await request.json();
  try {
    const db = await connectDB();
    const bookingCollection = db.collection("booking");

    const res = await bookingCollection.insertOne(booking);
    return Response.json({ message: "Booking data saved" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 500 });
  }
};
