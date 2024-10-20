import { MongoClient, ServerApiVersion } from "mongodb";

// Revalidation and dynamic rendering settings
export const revalidate = 1;
export const dynamic = 'force-dynamic';

let db;

// Database connection function
export const connectDB = async () => {
  if (db) return db; // Return existing connection

  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.d7w0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    console.log("MongoDB URI:", uri); // Log the connection URI

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    
    // Connect to MongoDB server
    await client.connect();
    db = client.db("firstNextAuth"); // Use your database name
    console.log("Successfully connected to MongoDB!");
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error.message); // Log the error
    throw new Error("Could not connect to MongoDB"); // Optionally throw an error
  }
};

