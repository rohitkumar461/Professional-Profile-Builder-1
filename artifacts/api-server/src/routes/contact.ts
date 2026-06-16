import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

router.post("/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }

  const { name, email, company, message } = parsed.data;

  const gmailUser = process.env.GMAIL_USER || "rohit.461@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailPass) {
    req.log.error("GMAIL_APP_PASSWORD env var not set");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: gmailUser,
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
    req.log.info({ to: gmailUser, from: email }, "Contact email sent");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
