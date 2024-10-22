import { connectDB } from "@/app/lib/connectDB";
export const dynamic = 'force-dynamic';

// Handle PUT and GET requests
export const PUT = async (request) => {
  try {
    const db = await connectDB();
    const availabilityCollection = db.collection("available");

    const available = await request.json();
    console.log("Received data for update:", available);

    const filter = { email: available.email };

    // Create an object to dynamically set all time-related fields
    const updateTimes = {};
    const unsetTimes = {};

    for (const day in available.times) {
      if (available.times[day].startTime && available.times[day].endTime) {
        // If day is selected, add to update object
        updateTimes[`times.${day}.startTime`] = available.times[day].startTime;
        updateTimes[`times.${day}.endTime`] = available.times[day].endTime;
      }
    }

    // Find all previously selected days from the database
    const existingAvailability = await availabilityCollection.findOne(filter);
    if (existingAvailability && existingAvailability.times) {
      // Identify days that were removed and need to be unset
      for (const day in existingAvailability.times) {
        if (!available.times[day]) {
          unsetTimes[`times.${day}`] = ""; // Unset this day if it's no longer selected
        }
      }
    }

    const update = {
      $set: {
        name: available.name,
        email: available.email,
        ...updateTimes, // Spread dynamically created time fields
      },
    };

    if (Object.keys(unsetTimes).length > 0) {
      update.$unset = unsetTimes; // Add unset for days that were removed
    }

    const result = await availabilityCollection.updateOne(filter, update, {
      upsert: true,
    });
    console.log("Update result:", result);

    return new Response(JSON.stringify({ message: "Availability Updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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
    const availabilityCollection = db.collection("available");

    // Get email from query params
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find availability by email
    const available = await availabilityCollection.findOne({ email });

    if (!available) {
      return new Response(
        JSON.stringify({ message: "No availability found for this user" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(available), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching availability:", error);

    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};