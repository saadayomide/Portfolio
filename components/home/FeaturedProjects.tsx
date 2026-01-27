"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    title: "ShopSmart",
    impact: "Full-stack price comparison system with real-time scraping and intelligent matching engine",
    tags: ["FastAPI", "Azure", "PostgreSQL"],
    href: "/projects/shopsmart",
    accent: "#00ff88",
    metric: "Deployed",
  },
  {
    title: "Government Spending Tracker",
    impact: "Production-grade budget management with comprehensive testing and observability",
    tags: ["FastAPI", "React", "CI/CD"],
    href: "/projects/government-spending",
    accent: "#8b5cf6",
    metric: "93% coverage",
  },
  {
    title: "Student Dropout Prediction",
    impact: "End-to-end ML pipeline with ensemble models and interpretable fairness analysis",
    tags: ["Python", "LightGBM", "SHAP"],
    href: "/projects/dropout-prediction",
    accent: "#f59e0b",
    metric: "Fairness-aware",
  },
];

export function FeaturedProjects() {
  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Work</h2>
          <p className="text-slate-400 mt-2">Selected projects showcasing full-stack and ML capabilities</p>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link
              href={project.href}
              className="group relative block h-full rounded-2xl overflow-hidden"
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle at 50% 0%, ${project.accent}10 0%, transparent 60%)` 
                }}
              />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors" />

              <div className="relative p-6 space-y-5">
                {/* Header with metric */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-heading font-semibold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span 
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{ 
                      backgroundColor: `${project.accent}15`,
                      color: project.accent
                    }}
                  >
                    {project.metric}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.impact}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs text-slate-500 bg-white/[0.03] border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 pt-2 text-sm font-medium" style={{ color: project.accent }}>
                  <span>View case study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
