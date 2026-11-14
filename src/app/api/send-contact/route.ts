import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const FROM_EMAIL = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string;
const NOTIFY_EMAIL = 'contact@usapetsforhome.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, puppyName } = body;

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Message</h1>
          <p style="color: #fde68a; margin: 6px 0 0; font-size: 14px;">Subject: ${subject}</p>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Sender Details</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 35%;">Name</td><td style="padding: 6px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #b45309;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 6px 0; color: #6b7280;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>` : ''}
            ${puppyName ? `<tr><td style="padding: 6px 0; color: #6b7280;">Asking About</td><td style="padding: 6px 0;">${puppyName}</td></tr>` : ''}
          </table>

          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Message</h2>
          <div style="background: #f9fafb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.7; color: #374151; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    `;

    const applicantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">We Got Your Message — USA Pets For Home</h1>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; margin-top: 0;">Hi <strong>${firstName}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6;">Thanks for reaching out! We have received your message and will get back to you at <strong>${email}</strong> as soon as possible — typically within 1–2 business days.</p>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #111;">Your Message</p>
            <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #4b5563; font-size: 14px; line-height: 1.6;">In the meantime, feel free to browse our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/available-puppies" style="color: #b45309;">available puppies</a>.</p>
          <p style="color: #4b5563; font-size: 14px;">Warm regards,<br/><strong>USA Pets For Home Team</strong></p>
        </div>
      </div>
    `;

    await Promise.all([
      sgMail.send({
        to: NOTIFY_EMAIL,
        from: FROM_EMAIL,
        subject: `Contact Form: ${subject} — ${firstName} ${lastName}`,
        html: adminHtml,
      }),
      sgMail.send({
        to: email,
        from: FROM_EMAIL,
        subject: `We received your message — USA Pets For Home`,
        html: applicantHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const err = error as { response?: { body?: unknown }; message?: string };
    console.error('SendGrid error:', err?.response?.body || err?.message);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
