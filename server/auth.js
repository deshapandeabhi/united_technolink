import crypto from "node:crypto";

const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
const sessions = new Map(); // token -> expiresAt

function purgeExpired() {
  const now = Date.now();
  for (const [token, expiresAt] of sessions) {
    if (expiresAt < now) sessions.delete(token);
  }
}

export function createSession() {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, Date.now() + SESSION_TTL_MS);
  return token;
}

export function destroySession(token) {
  sessions.delete(token);
}

export function isValidSession(token) {
  if (!token) return false;
  purgeExpired();
  const expiresAt = sessions.get(token);
  return typeof expiresAt === "number" && expiresAt > Date.now();
}

export function requireAdmin(req, res, next) {
  const token = req.cookies?.admin_session;
  if (!isValidSession(token)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}
