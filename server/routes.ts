import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCorporateInquirySchema } from "@shared/schema";
import { handleChat } from "./routes/chat";
// Simple email function using mailto (no external service required)
function generateEmailBody(data: any): string {
  return `
New Corporate Partnership Inquiry

Company: ${data.companyName}
Contact: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}
Sponsorship Level: ${data.sponsorshipLevel}

Message:
${data.message}

Submitted: ${new Date().toISOString()}
  `.trim();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Corporate inquiry submission endpoint
  app.post("/api/corporate-inquiry", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertCorporateInquirySchema.parse(req.body);
      
      // Store inquiry in database
      const inquiry = await storage.createCorporateInquiry(validatedData);
      
      // Log the inquiry for email notification (admin can check logs)
      const emailBody = generateEmailBody(validatedData);
      console.log('=== NEW CORPORATE PARTNERSHIP INQUIRY ===');
      console.log(emailBody);
      console.log('=== END OF INQUIRY ===');
      
      // Return response with inquiry data for client-side email handling
      res.json({ 
        success: true, 
        message: 'Inquiry submitted successfully',
        emailData: {
          to: 'rehanraj0911@gmail.com',
          subject: `New Corporate Partnership Inquiry - ${validatedData.companyName}`,
          body: emailBody
        }
      });
    } catch (error) {
      console.error('Error processing corporate inquiry:', error);
      res.status(400).json({ error: 'Invalid request data' });
    }
  });

  // Chat endpoint
  app.post("/api/chat", handleChat);

  const httpServer = createServer(app);

  return httpServer;
}
