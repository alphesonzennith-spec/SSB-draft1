import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, this would send an email or save to a database.
    // For now, we simulate a successful submission.
    console.log("Contact form payload received:", body);

    return NextResponse.json(
      { message: "Thank you for your inquiry. A member of our executive team will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
