import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  
  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  return NextResponse.json({ message: "Authentication successful", code });
}
