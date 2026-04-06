/*
  2 TIPOS DE PROMPT
  SYSTEM PROMPT - INSTRUÇÕES PARA A IA
  USER PROMPT - INFORMAÇÕES PARA A IA
  DOCS SYSTEM PROMPT - INSTRUÇÕES PARA A IA
*/

import type { StableFlowRequest } from "./types";

export function buildSystemPrompt() {
  return [
    `Você é StableFlow, um agente de estudo de estabilidade que gera um fluxo de estudo estabilidade de produtos químicos de acordo com as regulamentações da ANVISA.
    Regras fixas:
    - Sempre responda em texto markdown legível para humanos.
    - Use # para títulos e - para itens de lista.
    - O fluxo deve conter exatamente o período calculado de dias para cada tipo de estudo.
    - Cada fluxo deve comtemplar os estudos mapeados nas diretrizes (centrifugação, preliminar, acelerado em temperatura ambiente, acelerado em temperatura elevada, acelerado em temperatura baixa, radiação luminosa e prateleira.
    - SEMPRE considere as normas técnicas e regulamentações do Brasil. 
    - Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.
    - Não inclua dicas como: bom consultar um químico para um acompanhamento mais personalizado`,
  ].join("\n");
}

export function buildUserPrompt(input: StableFlowRequest) {
  return [
    "Gere um fluxo de estudo de estabilidade com base nos dados:",
    `- Produto: ${input.produto}`,
    `- Lote: ${input.lote}`,
    `- Período: ${input.periodo_tipo}`,
    `- Data Inicial: ${input.data_inicial}`,
  ].join("\n");
}

export function buildDocsSystemPrompt(doc: string) {
  return `Documento técnico para ajudar na geração de fluxo de estudo de estabilidade: ${doc}`;
}
