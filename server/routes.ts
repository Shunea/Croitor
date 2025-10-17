import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        createdAt: submission.createdAt,
      });

      try {
        await sendContactNotification(validatedData);
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }

      res.status(201).json({
        success: true,
        message: "Mesajul a fost trimis cu succes! Vă vom contacta în curând.",
        data: {
          id: submission.id,
          createdAt: submission.createdAt,
        },
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Date invalide",
          errors: validationError.message,
        });
      }

      console.error("Error creating contact submission:", error);
      res.status(500).json({
        success: false,
        message: "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
      });
    }
  });

  app.get("/api/contact-submissions", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({
        success: true,
        data: submissions,
        count: submissions.length,
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching submissions",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
