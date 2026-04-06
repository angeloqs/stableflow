import { z } from "zod";

export const StableFlowRequestSchema = z.object({
  produto: z.string().min(2),
  lote: z.string().min(1),
  periodo_tipo: z.enum(["curto", "médio", "longo"]),
  data_inicial: z.string(),
});

export type StableFlowRequest = z.infer<typeof StableFlowRequestSchema>;
