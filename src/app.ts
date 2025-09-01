import Fastify from "fastify";
import type { FastifyInstance } from "fastify";


const createApp = async () => {
  // const app = Fastify();
  const app: FastifyInstance = Fastify({
    logger: {
      level: process.env.NODE_ENV === "production" ? "warn" : "info",
    },
  });

  app.get("/", async (req, reply) => {
    return { message: "obrigado" };
  });
  app.get("/api/hello", async (req, reply) => {
    return { message: "Hello from Fastify on Vercel!" };
  });

  return app;
};

export default createApp;

// const createApp = async () => {
//   const app: FastifyInstance = Fastify({
//     logger: {
//       level: process.env.NODE_ENV === "production" ? "warn" : "info",
//     },
//   });

//   app.get("/", async (_req, reply) => {
//     return reply
//       .status(200)
//       .type("text/html")
//       .send("<h1>Hello from Fastify!</h1>");
//   });

//   app.get("/api/health", (_req, reply) => {
//     return reply.status(200).send({
//       success: true,
//       message: "Server is healthy",
//       timestamp: new Date().toISOString(),
//       environment: process.env.NODE_ENV,
//     });
//   });

//   // 404 handler
//   app.setNotFoundHandler((_request, reply) => {
//     return reply.status(404).send({
//       success: false,
//       message: "Route not found",
//     });
//   });

//   return app;
// };

// Ensure the promise is handled
// const appInstance = createApp();

// export default appInstance;

