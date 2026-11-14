import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const FROM_EMAIL = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string;
const NOTIFY_EMAIL = 'contact@usapetsforhome.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, state, preferredBreed, preferredGender, desiredTimeframe, comments } = body;

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Waitlist Signup</h1>
          <p style="color: #fde68a; margin: 6px 0 0; font-size: 14px;">Breed Preference: ${preferredBreed}</p>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%;">Name</td><td style="padding: 6px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #b45309;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">State</td><td style="padding: 6px 0;">${state}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Puppy Preferences</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%;">Preferred Breed</td><td style="padding: 6px 0; font-weight: 600;">${preferredBreed}</td></tr>
            ${preferredGender ? `<tr><td style="padding: 6px 0; color: #6b7280;">Preferred Gender</td><td style="padding: 6px 0;">${preferredGender}</td></tr>` : ''}
            ${desiredTimeframe ? `<tr><td style="padding: 6px 0; color: #6b7280;">Desired Timeframe</td><td style="padding: 6px 0;">${desiredTimeframe}</td></tr>` : ''}
            ${comments ? `<tr><td style="padding: 6px 0; color: #6b7280;">Comments</td><td style="padding: 6px 0;">${comments}</td></tr>` : ''}
          </table>
        </div>
      </div>
    `;

    const applicantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">You're on the Waitlist — USA Pets For Home</h1>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; margin-top: 0;">Hi <strong>${firstName}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6;">You're officially on our waitlist! We will reach out at <strong>${email}</strong> as soon as a puppy matching your preferences becomes available.</p>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #111;">Your Preferences</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 5px 0; color: #6b7280; width: 45%;">Preferred Breed</td><td style="padding: 5px 0; font-weight: 600;">${preferredBreed}</td></tr>
              ${preferredGender ? `<tr><td style="padding: 5px 0; color: #6b7280;">Preferred Gender</td><td style="padding: 5px 0;">${preferredGender}</td></tr>` : ''}
              ${desiredTimeframe ? `<tr><td style="padding: 5px 0; color: #6b7280;">Desired Timeframe</td><td style="padding: 5px 0;">${desiredTimeframe}</td></tr>` : ''}
              <tr><td style="padding: 5px 0; color: #6b7280;">Your State</td><td style="padding: 5px 0;">${state}</td></tr>
            </table>
          </div>

          <p style="color: #6b7280; font-size: 13px; line-height: 1.6; background: #fef3c7; border-radius: 6px; padding: 12px 16px;">Please note: joining the waitlist does not guarantee a puppy or reserve a specific puppy. We will contact you when a matching puppy becomes available.</p>
          <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin-top: 20px;">In the meantime, check our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/available-puppies" style="color: #b45309;">available puppies</a> — you might find the perfect match right now!</p>
          <p style="color: #4b5563; font-size: 14px;">Warm regards,<br/><strong>USA Pets For Home Team</strong></p>
        </div>
      </div>
    `;

    await Promise.all([
      sgMail.send({
        to: NOTIFY_EMAIL,
        from: FROM_EMAIL,
        subject: `New Waitlist: ${firstName} ${lastName} — ${preferredBreed}`,
        html: adminHtml,
      }),
      sgMail.send({
        to: email,
        from: FROM_EMAIL,
        subject: `You're on the waitlist — USA Pets For Home`,
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
