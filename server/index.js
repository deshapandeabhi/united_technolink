import express from "express";
import cookieParser from "cookie-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { insertLead, listLeads } from "./db.js";
import { createSession, destroySession, requireAdmin } from "./auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const adminDir = path.join(rootDir, "admin");

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cookieParser());

// --- Public API: form submissions ---
app.post("/api/leads", (req, res) => {
  const { source, name, email, phone, company, inquiry, message } = req.body || {};

  if (!source || !name) {
    return res.status(400).json({ error: "source and name are required" });
  }

  insertLead({ source, name, email, phone, company, inquiry, message });
  res.status(201).json({ ok: true });
});

// --- Admin auth ---
app.post("/api/admin/login", (req, res) => {
  const { password } = req.body || {};
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Incorrect password" });
  }
  const token = createSession();
  res.cookie("admin_session", token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 12 * 60 * 60 * 1000,
  });
  res.json({ ok: true });
});

app.post("/api/admin/logout", (req, res) => {
  destroySession(req.cookies?.admin_session);
  res.clearCookie("admin_session");
  res.json({ ok: true });
});

app.get("/api/admin/leads", requireAdmin, (req, res) => {
  res.json(listLeads());
});

// --- Admin dashboard (plain static page, separate from the React SPA) ---
app.use("/admin", express.static(adminDir));

// --- Marketing site (React SPA) ---
app.use(express.static(distDir));
app.use((req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
