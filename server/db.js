import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dataDir = process.env.DATA_DIR || path.join(process.cwd(), "data");
fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, "leads.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    company TEXT,
    inquiry TEXT,
    message TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

const insertStmt = db.prepare(`
  INSERT INTO leads (source, name, email, phone, company, inquiry, message)
  VALUES (@source, @name, @email, @phone, @company, @inquiry, @message)
`);

export function insertLead(lead) {
  insertStmt.run({
    source: lead.source,
    name: lead.name,
    email: lead.email || null,
    phone: lead.phone || null,
    company: lead.company || null,
    inquiry: lead.inquiry || null,
    message: lead.message || null,
  });
}

export function listLeads() {
  return db.prepare("SELECT * FROM leads ORDER BY created_at DESC, id DESC").all();
}
