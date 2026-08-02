import { createServerFn } from "@tanstack/react-start";
import * as fs from "fs/promises";
import * as path from "path";
import type { Lead } from "@/lib/types";

// A simple file-based database for local development to prove backend connectivity.
const DB_PATH = path.resolve(process.cwd(), ".data", "leads.json");

async function ensureDb() {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    try {
      await fs.access(DB_PATH);
    } catch {
      await fs.writeFile(DB_PATH, JSON.stringify([]));
    }
  } catch (error) {
    console.error("Failed to initialize DB:", error);
  }
}

export const fetchLeads = createServerFn("GET", async () => {
  try {
    await ensureDb();
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as Lead[];
  } catch {
    return [];
  }
});

export const saveLead = createServerFn("POST", async (lead: Lead) => {
  try {
    await ensureDb();
    const data = await fs.readFile(DB_PATH, "utf-8");
    const leads = JSON.parse(data) as Lead[];
    leads.unshift(lead);
    await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
    return lead;
  } catch (error) {
    throw new Error("Failed to save lead");
  }
});
