import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongoose";

export async function GET() {
  try {
    const conn = await connectToDatabase();

    const { name, host, port, user } = conn.connection;

    return NextResponse.json({
      status: "ok",
      readyState: conn.connection.readyState,
      database: name,
      host,
      port,
      user,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ status: "error", message }, { status: 500 });
  }
}