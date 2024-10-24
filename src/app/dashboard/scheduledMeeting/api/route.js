import { connectDB } from "@/app/lib/connectDB";

export const GET = async (req) => {
  try {
    const url = new URL(req.url); // Create a URL object from req.url
    const searchParams = new URLSearchParams(url.search);
    const mail = searchParams.get("mail");
    const sortingType = searchParams.get("sortingType");
    const formattedDate = searchParams.get("formattedDate");
    const formattedTime = searchParams.get("formattedTime");

    if (!formattedDate || !formattedTime) {
      return new Response(
        JSON.stringify({ error: "Missing date or time parameters" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const AllResult = await bookingCollection.find().toArray();

    const [day, month, year] = formattedDate.split("/");
    const targetDate = new Date(`${year}-${month}-${day}T${formattedTime}:00`);
    let filteredResults;

    // filter the mail by author email
    const result = AllResult.filter((booking) => booking.authorEmail === mail);

    if (sortingType === "-1") {
      filteredResults = result.filter((booking) => {
        if (!booking.selectedDate || !booking.bookedTimeSlot) return false;
        const [bookingDay, bookingMonth, bookingYear] =
          booking.selectedDate.split("/");
        const bookingDate = new Date(
          `${bookingYear}-${bookingMonth}-${bookingDay}T${
            booking.bookedTimeSlot.split(" - ")[0]
          }:00`
        );
        return bookingDate < targetDate;
      });
    } else if (sortingType === "1") {
      filteredResults = result.filter((booking) => {
        if (!booking.selectedDate || !booking.bookedTimeSlot) return false;
        const [bookingDay, bookingMonth, bookingYear] =
          booking.selectedDate.split("/");
        const bookingDate = new Date(
          `${bookingYear}-${bookingMonth}-${bookingDay}T${
            booking.bookedTimeSlot.split(" - ")[1]
          }:00`
        );
        return bookingDate > targetDate;
      });

      // Sort the filtered results by bookedTimeSlot in ascending order
      filteredResults.sort((a, b) => {
        const timeA = a.bookedTimeSlot.split(" - ")[1]; // End time
        const timeB = b.bookedTimeSlot.split(" - ")[1]; // End time
        return (
          new Date(`${year}-${month}-${day}T${timeA}:00`) -
          new Date(`${year}-${month}-${day}T${timeB}:00`)
        );
      });
    } else {
      filteredResults = result;
    }

    return new Response(JSON.stringify(filteredResults), {
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
