import type { FastifyInstance } from "fastify";
import { VercelRequest, VercelResponse } from "@vercel/node";
import appInstance from "../src/app";

// ✅ Production-ready Vercel handler
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    const app: FastifyInstance = await appInstance;

    // Optional: narrow casting if you're certain these types align
    (app as any)(req, res);
  } catch (err) {
    console.error("❌ Error handling Vercel request:", err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
