import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import type { FastifyInstance } from "fastify";
import { configViews, Home } from "./libs/configs/config.view";


const createApp = async () => {
  const app: FastifyInstance = Fastify({
    logger: {
      level: process.env.NODE_ENV === "production" ? "warn" : "info",
    },
  });

  //register all plugins
  //serve static files
  await app.register(fastifyStatic, configViews);

  app.get("/", async (_req, reply) => {
    return reply
      .status(200)
      .type("text/html")
      .sendFile(Home);
  });

  app.get("/api/health", (_req, reply) => {
    return reply.status(200).send({
      success: true,
      message: "Server is healthy",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  });

  // 404 handler
  app.setNotFoundHandler((_request, reply) => {
    return reply.status(404).send({
      success: false,
      message: "Route not found",
    });
  });

  return app;
};

export default createApp;