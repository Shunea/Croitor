import nodemailer from "nodemailer";
import type { InsertContact } from "@shared/schema";

const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "croitor.dental.clinic@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "",
    },
  });
};

export async function sendContactNotification(contact: InsertContact): Promise<void> {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER || "croitor.dental.clinic@gmail.com",
    to: "croitor.dental.clinic@gmail.com",
    subject: `Nouă solicitare de contact de la ${contact.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Nouă solicitare de contact</h2>
        <p>Ați primit o nouă solicitare de contact prin site-ul web:</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nume:</strong> ${contact.name}</p>
          <p style="margin: 10px 0;"><strong>Telefon:</strong> ${contact.phone}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${contact.email}</p>
          <p style="margin: 10px 0;"><strong>Mesaj:</strong></p>
          <p style="margin: 10px 0; white-space: pre-wrap;">${contact.message}</p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px;">
          Vă rugăm să contactați clientul cât mai curând posibil.
        </p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #9ca3af; font-size: 12px;">
          Acest email a fost generat automat de pe site-ul Croitor Dental Clinic.
        </p>
      </div>
    `,
    text: `
Nouă solicitare de contact

Nume: ${contact.name}
Telefon: ${contact.phone}
Email: ${contact.email}

Mesaj:
${contact.message}

Vă rugăm să contactați clientul cât mai curând posibil.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send notification email");
  }
}
