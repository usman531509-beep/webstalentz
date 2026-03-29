import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'WebsTalentz Contact <support@webstalentz.com>',
      to: [process.env.CONTACT_EMAIL || 'support@webstalentz.com'],
      subject: `New Contact Form Submission: ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
          </div>
          <div style="padding: 30px;">
            <p style="margin-top: 0;">You have a new submission from your website's contact form.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; margin-bottom: 10px;">Message:</p>
              <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <div style="background: #f3f4f6; color: #6b7280; padding: 15px; text-align: center; font-size: 12px;">
            This email was sent from the WebsTalentz Contact Form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
