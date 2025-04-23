import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Received data:', data); // TODO: Přidej odeslání e-mailem (nodemailer, Resend)
  return NextResponse.json({ success: true });
}
