import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, lastName, email, phone, message, captchaToken } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message || !captchaToken) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Validating reCAPTCHA...");

    // Verify reCAPTCHA with Google
    const captchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    });

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return NextResponse.json({ error: "Failed reCAPTCHA verification" }, { status: 400 });
    }

    console.log("reCAPTCHA verified successfully.");

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL_USER,
        pass: process.env.ZOHO_EMAIL_PASS,
      },
    });

    // Verify transporter
    transporter.verify(function (error) {
      if (error) {
        console.error("SMTP Connection Error:", error);
        return NextResponse.json({ error: "SMTP connection failed" }, { status: 500 });
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL_USER,
      to: process.env.ZOHO_EMAIL_USER,
      subject: `New Contact Query from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #4a90e2; text-align: center;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #4a90e2;">${message}</blockquote>
          <hr />
          <p style="text-align: center; color: #888;">This email was sent from your website's contact form.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
