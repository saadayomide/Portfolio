"use client";

import { useState } from "react";
import { X, Play, Zap, Network, BarChart3, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const demos = [
  {
    title: "Embeddings Explorer",
    description: "Text → vector similarity visualization",
    whatItShows: "Interactive exploration of text embeddings and semantic similarity using FAISS",
    learned: "Understanding vector spaces, cosine similarity, and embedding quality evaluation",
    icon: Network,
    color: "#00ff88",
    status: "coming-soon",
  },
  {
    title: "Model Evaluation Viewer",
    description: "Interactive ML model performance metrics",
    whatItShows: "Visualization of confusion matrices, ROC curves, and SHAP explanations",
    learned: "How to present model performance in an interpretable, actionable way",
    icon: BarChart3,
    color: "#8b5cf6",
    status: "coming-soon",
  },
  {
    title: "Rate Limiting Simulator",
    description: "API rate limiting behavior demonstration",
    whatItShows: "Token bucket and sliding window algorithms with real-time visualization",
    learned: "Trade-offs between fairness, burst handling, and implementation complexity",
    icon: Zap,
    color: "#f59e0b",
    status: "coming-soon",
  },
  {
    title: "Scraper Health Monitor",
    description: "Web scraper reliability tracking",
    whatItShows: "Dashboard showing success rates, retry patterns, and error distributions",
    learned: "Building resilient data collection systems with proper observability",
    icon: Activity,
    color: "#ec4899",
    status: "coming-soon",
  },
];

export function PlaygroundIndex() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-slate-400 max-w-2xl">
          Interactive demonstrations of concepts and patterns I&apos;ve learned while building projects. 
          Each demo is designed to teach through exploration.
        </p>
      </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
        {demos.map((demo, index) => {
          const Icon = demo.icon;
          return (
            <motion.div
          key={demo.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-6 hover:border-white/[0.12] transition-all"
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 0%, ${demo.color}06 0%, transparent 60%)` }}
              />
              
              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${demo.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: demo.color }} />
                  </div>
                  {demo.status === "coming-soon" && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/[0.06] text-slate-500 uppercase tracking-wider">
                      Coming Soon
                    </span>
                  )}
                </div>

          <div>
                  <h3 className="text-xl font-heading font-semibold text-white">{demo.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{demo.description}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div>
                    <span className="text-slate-500">Demonstrates: </span>
              <span className="text-slate-300">{demo.whatItShows}</span>
            </div>
            </div>

          <button
            onClick={() => setSelectedDemo(index)}
                  disabled={demo.status === "coming-soon"}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: demo.status === "coming-soon" ? "rgba(255,255,255,0.03)" : `${demo.color}15`,
                    color: demo.status === "coming-soon" ? "#6b7280" : demo.color,
                    borderWidth: 1,
                    borderColor: demo.status === "coming-soon" ? "rgba(255,255,255,0.06)" : `${demo.color}30`,
                  }}
                >
                  <Play className="w-4 h-4" />
                  {demo.status === "coming-soon" ? "Coming Soon" : "Open Demo"}
          </button>
        </div>
            </motion.div>
          );
        })}
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
      {selectedDemo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedDemo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-surface-1 border border-white/[0.08] rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = demos[selectedDemo].icon;
                    return (
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${demos[selectedDemo].color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: demos[selectedDemo].color }} />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="font-heading font-semibold">{demos[selectedDemo].title}</h3>
                    <p className="text-xs text-slate-500">{demos[selectedDemo].description}</p>
                  </div>
                </div>
              <button
                onClick={() => setSelectedDemo(null)}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                  <X className="w-4 h-4" />
              </button>
            </div>
              
              <div className="p-6 space-y-6">
                <div className="aspect-video rounded-xl bg-white/[0.02] border border-dashed border-white/[0.1] flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-4 text-slate-600" />
                    <p className="text-slate-500">Interactive demo will be embedded here</p>
                  </div>
            </div>
                
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">What I learned</p>
                  <p className="text-sm text-slate-300">{demos[selectedDemo].learned}</p>
            </div>
          </div>
            </motion.div>
          </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
