"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loadingMessages = [
  "Analisando com máximo cuidado.",
  "Caprichando em cada detalhe.",
  "Processando com muita atenção.",
  "Trabalhando nisso. Quase pronto.",
  "Qualidade exige tempo. Melhorando.",
  "Finalizando. Obrigado pela paciência.",
  "Preparando tudo com carinho.",
  "Que tal respirar fundo? 🌿"
];

export function AnimatedLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen from-slate-900 via-slate-800 to-slate-900">
      <div className="relative flex items-center justify-center w-64 h-64">

        {/* LOGO CENTRAL (NÚCLEO) */}
        <div className="relative z-10 w-24 h-24 flex items-center justify-center">
          <img
            src="/sf.png"
            alt="App Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          />
          {/* Brilho pulsante atrás do logo */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* ORBITAL 1 */}
        <motion.div
          className="absolute w-80 h-80 border border-green-400/30 rounded-full"
          style={{ rotateX: "70deg" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#4ade80]" />
        </motion.div>

        {/* ORBITAL 2 */}
        <motion.div
          className="absolute w-100 h-100 border border-emerald-400/30 rounded-full"
          style={{ rotateX: "70deg", rotateZ: "60deg" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#34d399]" />
        </motion.div>

        {/* ORBITAL 3 */}
        <motion.div
          className="absolute w-120 h-120 border border-teal-400/30 rounded-full"
          style={{ rotateX: "70deg", rotateZ: "360deg" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#14b8a6]" />
        </motion.div>

        {/* RASTRO DE LUZ (GLOW GERAL) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 rounded-full blur-2xl" />
      </div>

      {/* Texto de carregamento */}
      <div className="absolute bottom-20 w-full text-center flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            className="text-green-500 text-sm font-semibold tracking-widest"
            initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            transition={{ duration: 0.4 }}
          >
            {loadingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}