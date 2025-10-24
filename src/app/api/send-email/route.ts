// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jakubprzyciasa@gmail.com',
      subject: `New message from jacobprzyciasa.com`,
      html: `
        <h2>New contact from your page!</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
