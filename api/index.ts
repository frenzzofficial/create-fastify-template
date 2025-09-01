import type { VercelRequest, VercelResponse } from "@vercel/node";
import appInstance from "../src/app";

// Vercel-compatible Fastify handler
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    const app = await appInstance;

    // Ensure Fastify is ready before handling the request
    if (!app.ready) {
      await app.ready();
    }

    // Use Fastify's built-in Vercel adapter
    app.server.emit("request", req, res);
  } catch (err) {
    console.error("❌ Error handling Vercel request:", err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}