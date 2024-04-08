import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND);

interface ContactFormData {
  email: string;
  content: string;
}

export async function POST(req: Request) {
  try {
    const { email, content }: ContactFormData = await req.json();
    const data = await resend.emails.send({
      from: `ludwik<help@ludwikfaron.com>`,
      to: "michal.kopijka@gmail.com",
      subject: "Contact form",
      text: content,
      reply_to: email,
    });

    if (!data) {
      return new NextResponse("Error sending email", { status: 400 });
    }

    return new NextResponse("Email sent", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
