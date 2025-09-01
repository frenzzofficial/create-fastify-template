import Fastify from "fastify";

const app = Fastify();

app.get("/api/hello", async (req, reply) => {
  return { message: "Hello from Fastify on Vercel!" };
});

export default app;