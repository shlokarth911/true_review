import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Connected to database");
    return;
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const db = await mongoose.connect(mongoUri || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("Database connection failed", error);

    process.exit();
  }
}

export default dbConnect;
