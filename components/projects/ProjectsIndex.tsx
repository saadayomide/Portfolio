"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Backend",
  "AI/ML",
  "Cloud/DevOps",
  "Full-stack",
  "Research",
];

const projects = [
  {
    title: "ShopSmart",
    impact: "Full-stack price comparison system with real-time scraping and intelligent matching engine",
    tags: ["Backend", "Scraping/Data", "Cloud/DevOps"],
    stack: ["FastAPI", "Azure", "PostgreSQL", "Web Scraping"],
    href: "/projects/shopsmart",
    date: "Jan 2026",
    accent: "#00ff88",
    metric: "Deployed",
  },
  {
    title: "Government Spending Tracker",
    impact: "Production-grade budget management with comprehensive testing and observability",
    tags: ["Backend", "Full-stack", "Cloud/DevOps"],
    stack: ["FastAPI", "React", "PostgreSQL", "Prometheus"],
    href: "/projects/government-spending",
    date: "Jan 2026",
    accent: "#8b5cf6",
    metric: "93% coverage",
  },
  {
    title: "Student Dropout Prediction",
    impact: "End-to-end ML pipeline with ensemble models and interpretable fairness analysis",
    tags: ["AI/ML", "Research"],
    stack: ["Python", "LightGBM", "SHAP", "Fairness"],
    href: "/projects/dropout-prediction",
    date: "Jan 2026",
    accent: "#f59e0b",
    metric: "Fairness-aware",
  },
  {
    title: "Lost & Found",
    impact: "Desktop application with clean MVC architecture and comprehensive testing",
    tags: ["Full-stack"],
    stack: ["Java", "JavaFX", "SQLite", "JUnit"],
    href: "/projects/lost-found",
    date: "Jan 2026",
    accent: "#3b82f6",
    metric: "Clean architecture",
  },
  {
    title: "Predictive Social Media",
    impact: "End-to-end content intelligence system with explainability-first RAG architecture",
    tags: ["AI/ML", "Backend", "Research"],
    stack: ["Python", "RAG", "FAISS", "Embeddings"],
    href: "/projects/predictive-social",
    date: "2023 - Present",
    accent: "#ec4899",
    metric: "RAG system",
  },
];

export function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="space-y-8">
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center gap-2"
      >
        <div className="flex items-center gap-2 text-sm text-slate-500 mr-2">
          <Filter className="w-4 h-4" />
        </div>
          {filters.map((filter) => (
          <motion.button
              key={filter}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(filter)}
              className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeFilter === filter
                ? "bg-accent/15 text-accent border border-accent/30"
                : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              {filter}
          </motion.button>
          ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
          <Link
            href={project.href}
                className="group relative block h-full rounded-2xl overflow-hidden"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}08 0%, transparent 60%)` }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors" />

                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-heading font-semibold group-hover:text-white transition-colors">
                {project.title}
              </h3>
                    <span className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
            </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.impact}
                  </p>

                  {/* Metric Badge */}
                  <span 
                    className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                  >
                    {project.metric}
                  </span>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                        className="px-2 py-1 rounded text-xs text-slate-500 bg-white/[0.03] border border-white/[0.04]"
                >
                  {tech}
                </span>
              ))}
            </div>

                  {/* CTA */}
                  <div 
                    className="flex items-center gap-2 pt-2 text-sm font-medium"
                    style={{ color: project.accent }}
                  >
              Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
            </div>
          </Link>
            </motion.div>
        ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-slate-500">No projects found for &quot;{activeFilter}&quot;</p>
          <button
            onClick={() => setActiveFilter("All")}
            className="text-accent hover:underline mt-2 text-sm"
          >
            Show all projects
          </button>
        </motion.div>
      )}
    </div>
  );
}
