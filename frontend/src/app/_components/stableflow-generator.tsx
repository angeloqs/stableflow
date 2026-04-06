"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedLoader } from "./animated-loader";
import { StableFlowData } from "@/types/stableflow-data.type";
import { CirclePower } from "lucide-react";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export function StableFlowGenerator({ data, onReset }: { data: StableFlowData; onReset?: () => void }) {
  const [output, setOutput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  async function startStreaming() {
    const controller = new AbortController();
    controllerRef.current = controller;

    setOutput("");
    setIsStreaming(true);

    try {
      const response = await fetch("http://localhost:3333/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          produto: data.produto,
          lote: data.lote,
          periodo_tipo: data.periodo_tipo,
          data_inicial: data.data_inicial,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        let errorMsg = "Erro desconhecido";
        try { errorMsg = await response.text(); } catch (e) { }
        console.error("API response error:", response.status, errorMsg);
        throw new Error(`Erro ao gerar fluxo de estudo de estabilidade: ${response.status} ${errorMsg}`);
      }

      if (!response.body) {
        throw new Error("Resposta sem body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        accumulatedText += decoder.decode(value, { stream: true });
        setOutput(accumulatedText);
      }
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.log("REQUEST CANCELADA");
        return;
      }

      console.error(err);
      setOutput("Erro ao gerar fluxo de estudo de estabilidade. Tente novamente.");
    } finally {
      setIsStreaming(false);
      controllerRef.current = null;
    }
  }

  async function handleGenerate() {
    if (output) {
      if (onReset) onReset();
      return;
    }

    if (isStreaming) {
      controllerRef.current?.abort();
      setIsStreaming(false);
      return;
    }

    await startStreaming();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {isStreaming && <AnimatedLoader />}

      {!isStreaming && (
        <Card className="w-full max-w-4xl border-0 p-4 md:p-6">
          <div className="w-full flex justify-center gap-4">
            <Button
              className="cursor-pointer gap-2"
              size="lg"
              onClick={handleGenerate}
            >
              <CirclePower className="w-6 h-6" />
              {output ? "Gerar novo fluxo" : "Gerar fluxo"}
            </Button>
          </div>

          {output && (
            <div className="mt-6 bg-card rounded-lg p-6 border border-border max-h-[500px] overflow-y-auto">
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ ...props }) => (
                      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4" {...props} />
                    ),
                    h2: ({ ...props }) => (
                      <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mt-6 mb-2" {...props} />
                    ),
                    p: ({ ...props }) => (
                      <p className="leading-7 text-zinc-700 dark:text-zinc-300 mb-3" {...props} />
                    ),
                    li: ({ ...props }) => (
                      <li className="mb-1 text-zinc-700 dark:text-zinc-300" {...props} />
                    ),
                  }}
                >
                  {output}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}