import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertCorporateInquirySchema,
  insertContentSettingSchema,
  insertFundraisingProgressSchema,
  insertCampaignUpdateSchema,
} from "@shared/schema";

// -----------------------------
// Redirects: theupliftproject.us/<slug> -> external page
// -----------------------------
const redirectMap: Record<string, string> = {
  schuetze: "https://pages.lls.org/svoy/stx/svoysa26/aschuetze",
  miguel: "https://pages.lls.org/svoy/stx/svoysa26/mroman",
  abraham: "https://pages.lls.org/svoy/stx/svoysa26/asutton",
  hildie: "https://pages.lls.org/svoy/stx/svoysa26/hvillagome",
  landon: "https://pages.lls.org/svoy/stx/svoysa26/lhansen",
  matthew: "https://pages.lls.org/svoy/stx/svoysa26/mbomersbac",
  sierra: "https://pages.lls.org/svoy/stx/svoysa26/srogler",
  ben: "https://pages.lls.org/svoy/stx/svoysa26/bstorandt",
  andrew: "https://pages.lls.org/svoy/stx/svoysa26/aeickstead",
  milly: "https://pages.lls.org/svoy/stx/svoysa26/mcardenas",
  chris: "https://pages.lls.org/svoy/stx/svoysa26/cjohnson",
  keegan: "https://pages.lls.org/svoy/stx/svoysa26/kstinson",
};

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
  // -------------------------------------------------------
  // Instant redirect routes (MUST be before /api routes)
  // -------------------------------------------------------
  // Supports:
  // - /schuetze
  // - /schuetze/
  // - /SCHUETZE (case-insensitive)
  app.get(/^\/([^\/]+)\/?$/, (req: any, res: any, next: any) => {
    const slug = String(req.params[0] || "").toLowerCase();
    const target = redirectMap[slug];

    if (target) {
      // Use 302 during campaign (safe if URLs ever change)
      return res.redirect(302, target);
      // If you want permanent redirects, use:
      // return res.redirect(301, target);
    }

    next();
  });

  // Corporate inquiry submission endpoint
  app.post("/api/corporate-inquiry", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertCorporateInquirySchema.parse(req.body);

      // Store inquiry in database
      const inquiry = await storage.createCorporateInquiry(validatedData);

      // Log the inquiry for email notification (admin can check logs)
      const emailBody = generateEmailBody(validatedData);
      console.log("=== NEW CORPORATE PARTNERSHIP INQUIRY ===");
      console.log(emailBody);
      console.log("=== END OF INQUIRY ===");

      // Return response with inquiry data for client-side email handling
      res.json({
        success: true,
        message: "Inquiry submitted successfully",
        emailData: {
          to: "rehanraj0911@gmail.com",
          subject: `New Corporate Partnership Inquiry - ${validatedData.companyName}`,
          body: emailBody,
        },
      });
    } catch (error) {
      console.error("Error processing corporate inquiry:", error);
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  // Simple admin authentication middleware
  const adminAuth = (req: any, res: any, next: any) => {
    const password = req.headers.authorization?.replace("Bearer ", "");
    if (password === "upliftproject50k2025$$$$") {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  // Admin API endpoints
  app.post("/api/admin/auth", (req, res) => {
    const { password } = req.body;
    if (password === "upliftproject50k2025$$$$") {
      res.json({ success: true, message: "Authentication successful" });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  });

  // Get fundraising progress
  app.get("/api/admin/fundraising-progress", adminAuth, async (req, res) => {
    try {
      const progress = await storage.getFundraisingProgress();
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch fundraising progress" });
    }
  });

  // Update fundraising progress
  app.put("/api/admin/fundraising-progress", adminAuth, async (req, res) => {
    try {
      const validatedData = insertFundraisingProgressSchema.parse(req.body);
      const progress = await storage.updateFundraisingProgress(validatedData);
      res.json(progress);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  // Get campaign updates
  app.get("/api/admin/campaign-updates", adminAuth, async (req, res) => {
    try {
      const updates = await storage.getCampaignUpdates();
      res.json(updates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch campaign updates" });
    }
  });

  // Create campaign update
  app.post("/api/admin/campaign-updates", adminAuth, async (req, res) => {
    try {
      const validatedData = insertCampaignUpdateSchema.parse(req.body);
      const update = await storage.createCampaignUpdate(validatedData);
      res.json(update);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  // Update campaign update
  app.put("/api/admin/campaign-updates/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertCampaignUpdateSchema
        .partial()
        .parse(req.body);
      const update = await storage.updateCampaignUpdate(id, validatedData);
      res.json(update);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  // Delete campaign update
  app.delete("/api/admin/campaign-updates/:id", adminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteCampaignUpdate(id);
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete campaign update" });
    }
  });

  // Get content setting
  app.get("/api/admin/content/:key", adminAuth, async (req, res) => {
    try {
      const setting = await storage.getContentSetting(req.params.key);
      res.json(setting);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch content setting" });
    }
  });

  // Upsert content setting
  app.put("/api/admin/content", adminAuth, async (req, res) => {
    try {
      const validatedData = insertContentSettingSchema.parse(req.body);
      const setting = await storage.upsertContentSetting(validatedData);
      res.json(setting);
    } catch (error) {
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
