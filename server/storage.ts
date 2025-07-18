import { users, type User, type InsertUser, corporateInquiries, type CorporateInquiry, type InsertCorporateInquiry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCorporateInquiry(inquiry: InsertCorporateInquiry): Promise<CorporateInquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private corporateInquiries: Map<number, CorporateInquiry>;
  currentId: number;
  currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.corporateInquiries = new Map();
    this.currentId = 1;
    this.currentInquiryId = 1;
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
}

export const storage = new MemStorage();
