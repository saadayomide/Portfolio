"use client";

import { useState } from "react";
import { MapPin, Target, Briefcase, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
  {
    label: "Explainability-first",
    description: "Every ML model includes interpretability analysis and clear documentation of decision-making processes.",
    color: "#00ff88",
  },
  {
    label: "Production mindset",
    description: "Systems are built with testing, monitoring, and deployment from day one—not as afterthoughts.",
    color: "#8b5cf6",
  },
  {
    label: "Systems thinking",
    description: "Understanding how components interact, scale, and fail is central to every design decision.",
    color: "#f59e0b",
  },
  {
    label: "Bias-aware ML",
    description: "Fairness audits, subgroup analysis, and ethical considerations are integrated into model development.",
    color: "#ec4899",
  },
];

export function StorySection() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  return (
    <section className="grid lg:grid-cols-2 gap-12 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
          Building clear systems{" "}
          <span className="text-gradient">people can trust</span>.
        </h1>
        
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            I'm a Computer Science & AI student at IE University, passionate about
            building practical systems that solve real problems. My work sits at
            the intersection of software engineering and applied machine learning.
          </p>
          <p>
            Through projects like ShopSmart, Government Spending Tracker, and
            Student Dropout Prediction, I've gained hands-on experience with
            modern development workflows, data-driven system design, and writing
            clean, testable code.
          </p>
          <p>
            I'm eager to contribute in fast-paced, collaborative environments where I can 
            keep learning and help deliver impactful products.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-slate-500">Core values I code by:</p>
          <div className="flex flex-wrap gap-2">
            {values.map((value, index) => (
              <motion.button
                key={value.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedValue(selectedValue === index ? null : index)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-all border",
                  selectedValue === index
                    ? "bg-opacity-15 border-opacity-30"
                    : "bg-white/[0.03] border-white/[0.06] text-slate-300 hover:bg-white/[0.06]"
                )}
                style={selectedValue === index ? {
                  backgroundColor: `${value.color}15`,
                  borderColor: `${value.color}30`,
                  color: value.color
                } : {}}
              >
                {value.label}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence>
            {selectedValue !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: `${values[selectedValue].color}08`,
                    borderColor: `${values[selectedValue].color}15`
                  }}
                >
                  <p className="text-sm text-slate-300">{values[selectedValue].description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6"
      >
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-heading font-semibold">Snapshot</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Current location</p>
                <p className="font-medium text-white">Madrid, Spain</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Primary focus</p>
                <p className="font-medium text-white">Software Engineering + AI/ML</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Looking for</p>
                <p className="font-medium text-white">Computer Science Internship</p>
                <p className="text-sm text-slate-400 mt-1">
                  AI/ML Engineering • Backend • Full-Stack
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06]">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Eligible for IE internship agreement
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
