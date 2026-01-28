"use client";

import { useState } from "react";
import { ChevronRight, Rocket, Brain, Gauge, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Rocket,
    title: "Production-Ready Systems",
    description: "Full-stack development with clean architecture, comprehensive testing, and cloud deployment",
    color: "#00ff88",
    proof: [
      "ShopSmart: FastAPI + Azure App Service deployment",
      "Government Tracker: 93% test coverage with CI/CD",
      "Lost & Found: MVC architecture with JUnit testing",
    ],
  },
  {
    icon: Brain,
    title: "Responsible ML",
    description: "Machine learning with interpretability, fairness analysis, and ethical considerations baked in",
    color: "#8b5cf6",
    proof: [
      "Dropout Prediction: SHAP values + subgroup fairness audits",
      "Predictive Social: Explainability-first RAG architecture",
      "Bias-aware practices across all ML projects",
    ],
  },
  {
    icon: Gauge,
    title: "Ship with Confidence",
    description: "Agile workflows, automated testing, and continuous delivery for reliable, fast iterations",
    color: "#f59e0b",
    proof: [
      "GitHub Actions pipelines for automated testing",
      "Comprehensive unit and integration test suites",
      "Prometheus/Grafana monitoring from day one",
    ],
  },
];

export function Pillars() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold">What I Do Best</h2>
        <p className="text-slate-400 mt-2">Core competencies backed by real project experience</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isExpanded = expanded === index;

          return (
            <motion.div
            key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div 
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-300",
                  "bg-gradient-to-b from-white/[0.03] to-transparent",
                  "border border-white/[0.06] hover:border-white/[0.1]"
                )}
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${pillar.color}08 0%, transparent 50%)` 
                  }}
                />

                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-semibold">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>

                  {/* Toggle */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: pillar.color }}
                  >
                    {isExpanded ? "Hide" : "Show"} proof
                    <ChevronRight 
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isExpanded && "rotate-90"
                      )} 
                    />
                  </button>
                </div>

                {/* Expanded proof */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 space-y-3 border-t border-white/[0.04]">
                        {pillar.proof.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start gap-3 text-sm text-slate-400"
                          >
                            <Check 
                              className="w-4 h-4 mt-0.5 flex-shrink-0" 
                              style={{ color: pillar.color }} 
                            />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
