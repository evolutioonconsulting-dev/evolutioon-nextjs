import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Wire this up to your email provider (Resend, SES, Postmark, etc.)
    // or a CRM webhook. Example with Resend:
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     from: "EvoluTioon Website <no-reply@evolutioon.com>",
    //     to: "evolutioonconsulting@gmail.com",
    //     subject: `New enquiry from ${name}`,
    //     text: JSON.stringify(body, null, 2)
    //   })
    // });

    console.log("New contact submission:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
