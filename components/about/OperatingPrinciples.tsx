"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const principles = [
  {
    name: "Test-Driven Development",
    explanation: "Write tests first, code second. Every feature has corresponding test coverage.",
    applied: [
      { label: "Government Spending Tracker", href: "/projects/government-spending" },
      { label: "Lost & Found", href: "/projects/lost-found" },
    ],
    icon: "🧪",
    color: "#00ff88",
  },
  {
    name: "Explainability by Design",
    explanation: "ML models must be interpretable. SHAP values, feature importance, and clear documentation are non-negotiable.",
    applied: [
      { label: "Student Dropout Prediction", href: "/projects/dropout-prediction" },
      { label: "Predictive Social Media", href: "/projects/predictive-social" },
    ],
    icon: "🔍",
    color: "#8b5cf6",
  },
  {
    name: "Production-First Mindset",
    explanation: "Build with deployment, monitoring, and scaling in mind from day one.",
    applied: [
      { label: "ShopSmart", href: "/projects/shopsmart" },
      { label: "Government Spending Tracker", href: "/projects/government-spending" },
    ],
    icon: "🚀",
    color: "#f59e0b",
  },
  {
    name: "Ethical AI Practices",
    explanation: "Fairness audits, bias detection, and responsible data handling are integrated into every ML project.",
    applied: [
      { label: "Student Dropout Prediction", href: "/projects/dropout-prediction" },
    ],
    icon: "⚖️",
    color: "#ec4899",
  },
];

export function OperatingPrinciples() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-heading font-bold">Operating Principles</h2>
        <p className="text-slate-400 mt-2">The philosophy behind my engineering approach</p>
      </div>

      <div className="space-y-3">
        {principles.map((principle, index) => {
          const isExpanded = expanded === index;
          
          return (
            <motion.div
            key={principle.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 border",
                "bg-gradient-to-b from-white/[0.03] to-transparent",
                isExpanded ? "border-white/[0.12]" : "border-white/[0.06] hover:border-white/[0.1]"
              )}
              style={isExpanded ? { borderColor: `${principle.color}30` } : {}}
          >
            <button
                onClick={() => setExpanded(isExpanded ? null : index)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${principle.color}15` }}
            >
                  {principle.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-white">{principle.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-1">{principle.explanation}</p>
              </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
            </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-white/[0.04] pt-4 ml-16">
                      <p className="text-sm text-slate-300 mb-4">{principle.explanation}</p>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                          Applied in
                        </p>
                <div className="flex flex-wrap gap-2">
                  {principle.applied.map((item) => (
                            <Link
                      key={item.label}
                      href={item.href}
                              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all text-sm"
                              style={{ color: principle.color }}
                    >
                      {item.label}
                              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                  ))}
                </div>
              </div>
                    </div>
                  </motion.div>
            )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
