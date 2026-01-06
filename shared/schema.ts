import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  images: string[];
  material?: string;
  size?: string;
  thickness?: string;
  width?: string;
  height?: string;
  finish?: string;
  features: string[];
  useCases: string[];
  warranty?: string;
  isFeatured: boolean;
}
