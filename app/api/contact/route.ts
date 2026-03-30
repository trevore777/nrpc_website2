import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailOk) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL."
        },
        { status: 500 }
      );
    }

    const churchSend = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New NRPC website enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      `
    });

    if (churchSend.error) {
      return NextResponse.json(
        { error: churchSend.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thank you for contacting Northern Rivers Pentecostal Church",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Thank you for your message</h2>
          <p>Hello ${escapeHtml(name)},</p>
          <p>Thank you for getting in touch with Northern Rivers Pentecostal Church.</p>
          <p>We have received your message and someone will respond as soon as possible.</p>
          <p>God bless,</p>
          <p><strong>Northern Rivers Pentecostal Church</strong></p>
        </div>
      `
    });

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully."
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your message." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}