import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Read the body as text (since you're sending x-www-form-urlencoded)
    const body = await request.text();

    const res = await fetch(secrets.NEXT_PUBLIC_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: res.statusText },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}