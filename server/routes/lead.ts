import { RequestHandler } from "express";

export const handleLead: RequestHandler = async (req, res) => {
  const { challenge, count, email, company } = req.body ?? {};
  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const lead = {
      ts: new Date().toISOString(),
      challenge,
      count,
      email,
      company,
      ua: req.get("user-agent"),
      ip: req.ip,
    };
    console.log("New lead:", JSON.stringify(lead));
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Failed to save lead" });
  }
};
