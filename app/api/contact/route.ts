import { NextResponse } from "next/server";
import { getResend, CONTACT_TO, CONTACT_FROM } from "@/lib/resend";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const { name, email, message } = body;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const resend = getResend();
  if (!resend) {
    console.warn(
      "[contact] RESEND_API_KEY not configured — message dropped:",
      { name, email },
    );
    return NextResponse.json(
      {
        success: false,
        error: "Email service is not configured. Please email ethan@pickledcourt.com directly.",
      },
      { status: 503 },
    );
  }

  try {
    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New contact form: ${name}`,
      html: `
        <h2>New message from ethanpeterson.com</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error sending email.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
