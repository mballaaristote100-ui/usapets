import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const FROM_EMAIL = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string;
const NOTIFY_EMAIL = 'contact@usapetsforhome.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { step1, step2, step3, puppyName, puppyBreed, refNumber } = body;

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Puppy Application Received</h1>
          <p style="color: #fde68a; margin: 6px 0 0; font-size: 14px;">Reference: ${refNumber}</p>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          ${puppyName ? `
          <div style="background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;"><strong>Puppy Applied For:</strong> ${puppyName} — ${puppyBreed}</p>
          </div>` : ''}

          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Applicant Information</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%;">Name</td><td style="padding: 6px 0; font-weight: 600;">${step1.firstName} ${step1.lastName}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Email</td><td style="padding: 6px 0;"><a href="mailto:${step1.email}" style="color: #b45309;">${step1.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Phone</td><td style="padding: 6px 0;">${step1.phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Location</td><td style="padding: 6px 0;">${step1.city}, ${step1.state} ${step1.zip}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Home & Lifestyle</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%;">Residence Type</td><td style="padding: 6px 0;">${step2.residenceType}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Owns or Rents</td><td style="padding: 6px 0;">${step2.ownsOrRents}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;">Current Pets</td><td style="padding: 6px 0;">${step2.hasPets}</td></tr>
            ${step2.petDetails ? `<tr><td style="padding: 6px 0; color: #6b7280;">Pet Details</td><td style="padding: 6px 0;">${step2.petDetails}</td></tr>` : ''}
            <tr><td style="padding: 6px 0; color: #6b7280;">Dog Experience</td><td style="padding: 6px 0;">${step2.dogExperience}</td></tr>
            ${step2.hasChildren ? `<tr><td style="padding: 6px 0; color: #6b7280;">Children</td><td style="padding: 6px 0;">${step2.hasChildren}</td></tr>` : ''}
          </table>

          <h2 style="font-size: 16px; color: #111; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 16px;">Puppy Preferences</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 40%;">Delivery Method</td><td style="padding: 6px 0;">${step3.deliveryMethod}</td></tr>
            ${step3.desiredTiming ? `<tr><td style="padding: 6px 0; color: #6b7280;">Desired Timing</td><td style="padding: 6px 0;">${step3.desiredTiming}</td></tr>` : ''}
            ${step3.comments ? `<tr><td style="padding: 6px 0; color: #6b7280;">Comments</td><td style="padding: 6px 0;">${step3.comments}</td></tr>` : ''}
          </table>
        </div>
      </div>
    `;

    const applicantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #b45309; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Application Received — USA Pets For Home</h1>
        </div>
        <div style="background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; margin-top: 0;">Hi <strong>${step1.firstName}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6;">Thank you for submitting your application! We have received it and will review it carefully. We will be in touch at <strong>${step1.email}</strong> soon.</p>

          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #111;">Application Summary</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 5px 0; color: #6b7280; width: 45%;">Reference Number</td><td style="padding: 5px 0; font-weight: 600;">${refNumber}</td></tr>
              ${puppyName ? `<tr><td style="padding: 5px 0; color: #6b7280;">Puppy Applied For</td><td style="padding: 5px 0;">${puppyName} — ${puppyBreed}</td></tr>` : ''}
              <tr><td style="padding: 5px 0; color: #6b7280;">Status</td><td style="padding: 5px 0; color: #d97706; font-weight: 600;">Under Review</td></tr>
            </table>
          </div>

          <p style="color: #4b5563; font-size: 14px; line-height: 1.6;">If you have any questions in the meantime, feel free to reply to this email or reach out at <a href="mailto:contact@usapetsforhome.com" style="color: #b45309;">contact@usapetsforhome.com</a>.</p>
          <p style="color: #4b5563; font-size: 14px;">Warm regards,<br/><strong>USA Pets For Home Team</strong></p>
        </div>
      </div>
    `;

    await Promise.all([
      sgMail.send({
        to: NOTIFY_EMAIL,
        from: FROM_EMAIL,
        subject: `New Application: ${step1.firstName} ${step1.lastName}${puppyName ? ` — ${puppyName}` : ''} [${refNumber}]`,
        html: adminHtml,
      }),
      sgMail.send({
        to: step1.email,
        from: FROM_EMAIL,
        subject: `Your Application Has Been Received — ${refNumber}`,
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
