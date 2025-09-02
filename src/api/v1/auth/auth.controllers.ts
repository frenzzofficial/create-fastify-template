import { FastifyReply, FastifyRequest } from "fastify";

export const loginAuthController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    return reply.status(200).send({
      success: true,
      message: "Login successful",
      data: {
        userId: 1,
        token: "token",
      },
    });
  } catch (error) {}
};
