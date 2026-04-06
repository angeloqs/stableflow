export interface StableFlowData {
  produto: string;
  lote: string;
  periodo_tipo: "curto" | "médio" | "longo";
  data_inicial: string;
}