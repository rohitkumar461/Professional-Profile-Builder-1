import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }

  const { name, email, company, message } = parsed.data;

  const gmailUser = process.env.GMAIL_USER || "inbox.rohitkumar@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const recipientEmail = "inbox.rohitkumar@gmail.com";

  if (!gmailPass) {
    console.error("GMAIL_APP_PASSWORD env var not set");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Portfolio enquiry from ${name}${company ? ` (${company})` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2563EB">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:100px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#666"><strong>Company</strong></td><td style="padding:8px 0">${company}</td></tr>` : ""}
        </table>
        <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
        <h3 style="color:#444">Message</h3>
        <p style="line-height:1.7;color:#333;white-space:pre-wrap">${message}</p>
        <hr style="margin:20px 0;border:none;border-top:1px solid #eee"/>
        <p style="color:#999;font-size:12px">Sent via your portfolio contact form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Contact email sent to ${gmailUser} from ${email}`);
    res.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}