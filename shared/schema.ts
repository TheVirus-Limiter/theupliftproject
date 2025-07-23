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

// Admin content management
export const contentSettings = pgTable("content_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  updatedAt: text("updated_at").notNull().$default(() => new Date().toISOString()),
});

export const fundraisingProgress = pgTable("fundraising_progress", {
  id: serial("id").primaryKey(),
  currentAmount: integer("current_amount").notNull().default(0),
  goalAmount: integer("goal_amount").notNull().default(50000),
  donorCount: integer("donor_count").notNull().default(0),
  updatedAt: text("updated_at").notNull().$default(() => new Date().toISOString()),
});

export const campaignUpdates = pgTable("campaign_updates", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  isPublished: boolean("is_published").notNull().default(false),
  createdAt: text("created_at").notNull().$default(() => new Date().toISOString()),
  updatedAt: text("updated_at").notNull().$default(() => new Date().toISOString()),
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

export const insertContentSettingSchema = createInsertSchema(contentSettings).pick({
  key: true,
  value: true,
});

export const insertFundraisingProgressSchema = createInsertSchema(fundraisingProgress).pick({
  currentAmount: true,
  goalAmount: true,
  donorCount: true,
});

export const insertCampaignUpdateSchema = createInsertSchema(campaignUpdates).pick({
  title: true,
  content: true,
  isPublished: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCorporateInquiry = z.infer<typeof insertCorporateInquirySchema>;
export type CorporateInquiry = typeof corporateInquiries.$inferSelect;
export type InsertContentSetting = z.infer<typeof insertContentSettingSchema>;
export type ContentSetting = typeof contentSettings.$inferSelect;
export type InsertFundraisingProgress = z.infer<typeof insertFundraisingProgressSchema>;
export type FundraisingProgress = typeof fundraisingProgress.$inferSelect;
export type InsertCampaignUpdate = z.infer<typeof insertCampaignUpdateSchema>;
export type CampaignUpdate = typeof campaignUpdates.$inferSelect;
