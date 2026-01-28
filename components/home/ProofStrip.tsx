"use client";

import { motion } from "framer-motion";
import { Cloud, TestTube, Cog, Brain } from "lucide-react";

const proofs = [
  { icon: Cloud, label: "Deployed on Azure", value: "2+" },
  { icon: TestTube, label: "Test coverage", value: "93%" },
  { icon: Cog, label: "Production APIs", value: "3+" },
  { icon: Brain, label: "ML pipelines", value: "2+" },
];

export function ProofStrip() {
  return (
    <section className="py-12">
      <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/[0.06] overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] via-transparent to-accent/[0.02]" />
        
        <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.04]">
          {proofs.map((proof, index) => {
            const Icon = proof.icon;
            return (
              <motion.div
            key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group px-6 py-8 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-heading font-bold text-white">{proof.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{proof.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
      </div>
    </section>
  );
}
