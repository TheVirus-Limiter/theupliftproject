import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const corporateInquiries = pgTable("corporate_inquiries", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  sponsorshipLevel: text("sponsorship_level").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull().$default(() => new Date().toISOString()),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCorporateInquirySchema = createInsertSchema(corporateInquiries).pick({
  companyName: true,
  contactName: true,
  email: true,
  phone: true,
  sponsorshipLevel: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCorporateInquiry = z.infer<typeof insertCorporateInquirySchema>;
export type CorporateInquiry = typeof corporateInquiries.$inferSelect;
