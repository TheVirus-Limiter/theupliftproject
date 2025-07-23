import { 
  users, 
  type User, 
  type InsertUser, 
  corporateInquiries, 
  type CorporateInquiry, 
  type InsertCorporateInquiry,
  contentSettings,
  type ContentSetting,
  type InsertContentSetting,
  fundraisingProgress,
  type FundraisingProgress,
  type InsertFundraisingProgress,
  campaignUpdates,
  type CampaignUpdate,
  type InsertCampaignUpdate
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCorporateInquiry(inquiry: InsertCorporateInquiry): Promise<CorporateInquiry>;
  
  // Admin content management
  getContentSetting(key: string): Promise<ContentSetting | undefined>;
  upsertContentSetting(setting: InsertContentSetting): Promise<ContentSetting>;
  getFundraisingProgress(): Promise<FundraisingProgress | undefined>;
  updateFundraisingProgress(progress: InsertFundraisingProgress): Promise<FundraisingProgress>;
  getCampaignUpdates(): Promise<CampaignUpdate[]>;
  createCampaignUpdate(update: InsertCampaignUpdate): Promise<CampaignUpdate>;
  updateCampaignUpdate(id: number, update: Partial<InsertCampaignUpdate>): Promise<CampaignUpdate>;
  deleteCampaignUpdate(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private corporateInquiries: Map<number, CorporateInquiry>;
  private contentSettings: Map<string, ContentSetting>;
  private fundraisingProgressData: FundraisingProgress | undefined;
  private campaignUpdatesData: Map<number, CampaignUpdate>;
  currentId: number;
  currentInquiryId: number;
  currentUpdateId: number;

  constructor() {
    this.users = new Map();
    this.corporateInquiries = new Map();
    this.contentSettings = new Map();
    this.campaignUpdatesData = new Map();
    this.currentId = 1;
    this.currentInquiryId = 1;
    this.currentUpdateId = 1;
    
    // Initialize default fundraising progress
    this.fundraisingProgressData = {
      id: 1,
      currentAmount: 0,
      goalAmount: 50000,
      donorCount: 0,
      updatedAt: new Date().toISOString()
    };
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCorporateInquiry(insertInquiry: InsertCorporateInquiry): Promise<CorporateInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: CorporateInquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date().toISOString()
    };
    this.corporateInquiries.set(id, inquiry);
    return inquiry;
  }

  // Admin content management methods
  async getContentSetting(key: string): Promise<ContentSetting | undefined> {
    return this.contentSettings.get(key);
  }

  async upsertContentSetting(setting: InsertContentSetting): Promise<ContentSetting> {
    const existing = this.contentSettings.get(setting.key);
    const contentSetting: ContentSetting = {
      id: existing?.id || Date.now(),
      ...setting,
      updatedAt: new Date().toISOString()
    };
    this.contentSettings.set(setting.key, contentSetting);
    return contentSetting;
  }

  async getFundraisingProgress(): Promise<FundraisingProgress | undefined> {
    return this.fundraisingProgressData;
  }

  async updateFundraisingProgress(progress: InsertFundraisingProgress): Promise<FundraisingProgress> {
    const existing = this.fundraisingProgressData || {
      id: 1,
      currentAmount: 0,
      goalAmount: 50000,
      donorCount: 0,
      updatedAt: new Date().toISOString()
    };
    
    this.fundraisingProgressData = {
      ...existing,
      ...progress,
      updatedAt: new Date().toISOString()
    };
    return this.fundraisingProgressData;
  }

  async getCampaignUpdates(): Promise<CampaignUpdate[]> {
    return Array.from(this.campaignUpdatesData.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createCampaignUpdate(update: InsertCampaignUpdate): Promise<CampaignUpdate> {
    const id = this.currentUpdateId++;
    const now = new Date().toISOString();
    const campaignUpdate: CampaignUpdate = {
      id,
      title: update.title,
      content: update.content,
      isPublished: update.isPublished ?? false,
      createdAt: now,
      updatedAt: now
    };
    this.campaignUpdatesData.set(id, campaignUpdate);
    return campaignUpdate;
  }

  async updateCampaignUpdate(id: number, update: Partial<InsertCampaignUpdate>): Promise<CampaignUpdate> {
    const existing = this.campaignUpdatesData.get(id);
    if (!existing) {
      throw new Error('Campaign update not found');
    }
    const updated: CampaignUpdate = {
      ...existing,
      ...update,
      updatedAt: new Date().toISOString()
    };
    this.campaignUpdatesData.set(id, updated);
    return updated;
  }

  async deleteCampaignUpdate(id: number): Promise<boolean> {
    return this.campaignUpdatesData.delete(id);
  }
}

export const storage = new MemStorage();
