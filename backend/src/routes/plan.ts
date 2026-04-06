import type { FastifyInstance } from "fastify";
import { generateStableFlow } from "../agent";
import { StableFlowRequestSchema } from "../types";

export async function planRoutes(app: FastifyInstance) {
  app.post("/plan", async (request, reply) => {
    const parse = StableFlowRequestSchema.safeParse(request.body);

    if (!parse.success) {
      return reply.status(400).send({
        error: "ValidationError",
        details: parse.error.flatten((issue) => issue.message),
      });
    }

    reply.raw.setHeader("Access-Control-Allow-Origin", "*");
    reply.raw.setHeader("Content-Type", "text/plain; charset=utf-8");
    reply.raw.setHeader("Cache-Control", "no-cache");
    reply.raw.setHeader("Connection", "keep-alive");

    try {
      for await (const delta of generateStableFlow(parse.data)) {
        reply.raw.write(delta);
      }

      reply.raw.end();
    } catch (err: any) {
      request.log.error(err);
      reply.raw.write("\n\nErro ao gerar fluxo de estudo de estabilidade.");
      reply.raw.end();
    }

    return reply;
  });
}