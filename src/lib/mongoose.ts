import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

type CachedConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: CachedConnection;
};

const cached: CachedConnection =
  globalWithMongoose.mongoose ?? (globalWithMongoose.mongoose = { conn: null, promise: null });

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "social-media-clone", // target DB name
      bufferCommands: false,
      autoIndex: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}