"use client";

import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    name: "Languages",
    color: "#00ff88",
    skills: [
      { name: "Python", level: "strong", deployed: true },
      { name: "Java", level: "strong", deployed: true },
      { name: "JavaScript/TS", level: "intermediate", deployed: true },
      { name: "C", level: "familiar", deployed: false },
      { name: "Bash", level: "intermediate", deployed: true },
    ],
  },
  {
    name: "Backend/API",
    color: "#8b5cf6",
    skills: [
      { name: "FastAPI", level: "strong", deployed: true },
      { name: "Django", level: "intermediate", deployed: false },
      { name: "RESTful APIs", level: "strong", deployed: true },
      { name: "SQLAlchemy", level: "strong", deployed: true },
    ],
  },
  {
    name: "Data/ML",
    color: "#f59e0b",
    skills: [
      { name: "scikit-learn", level: "strong", deployed: true },
      { name: "PyTorch", level: "intermediate", deployed: false },
      { name: "Pandas", level: "strong", deployed: true },
      { name: "SHAP", level: "strong", deployed: true },
      { name: "LightGBM", level: "strong", deployed: true },
    ],
  },
  {
    name: "Cloud/DevOps",
    color: "#3b82f6",
    skills: [
      { name: "Azure", level: "strong", deployed: true },
      { name: "Docker", level: "strong", deployed: true },
      { name: "GitHub Actions", level: "strong", deployed: true },
      { name: "CI/CD", level: "strong", deployed: true },
    ],
  },
  {
    name: "Testing",
    color: "#ec4899",
    skills: [
      { name: "pytest", level: "strong", deployed: true },
      { name: "JUnit", level: "strong", deployed: true },
      { name: "Integration Testing", level: "strong", deployed: true },
    ],
  },
];

const skillDetails: Record<string, {
  projects: { name: string; href: string }[];
  example: string;
}> = {
  Python: {
    projects: [
      { name: "ShopSmart", href: "/projects/shopsmart" },
      { name: "Government Tracker", href: "/projects/government-spending" },
      { name: "Dropout Prediction", href: "/projects/dropout-prediction" },
    ],
    example: "FastAPI backends, ML pipelines, data processing scripts",
  },
  FastAPI: {
    projects: [
      { name: "ShopSmart", href: "/projects/shopsmart" },
      { name: "Government Tracker", href: "/projects/government-spending" },
    ],
    example: "RESTful endpoints, async operations, Pydantic validation",
  },
  SHAP: {
    projects: [
      { name: "Dropout Prediction", href: "/projects/dropout-prediction" },
    ],
    example: "Model interpretability, global/local explanations",
  },
  Azure: {
    projects: [
      { name: "ShopSmart", href: "/projects/shopsmart" },
      { name: "Government Tracker", href: "/projects/government-spending" },
    ],
    example: "App Service, PostgreSQL hosting, containerization",
  },
  Docker: {
    projects: [
      { name: "Government Tracker", href: "/projects/government-spending" },
    ],
    example: "Containerization for consistent environments",
  },
  Java: {
    projects: [
      { name: "Lost & Found", href: "/projects/lost-found" },
    ],
    example: "JavaFX desktop app with MVC architecture",
  },
};

export function SkillsMatrix() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const detail = selectedSkill ? skillDetails[selectedSkill] : null;

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-heading font-bold">Skills Matrix</h2>
        <p className="text-slate-400 mt-2">Click any skill to see where I&apos;ve applied it</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <h3 className="font-heading font-semibold">{category.name}</h3>
                  </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.button
                          key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border",
                    selectedSkill === skill.name
                      ? "text-white"
                      : skill.deployed
                        ? "bg-white/[0.04] border-white/[0.08] text-slate-300 hover:bg-white/[0.08]"
                        : "bg-white/[0.02] border-white/[0.04] text-slate-500 hover:bg-white/[0.04]"
                  )}
                  style={selectedSkill === skill.name ? {
                    backgroundColor: `${category.color}20`,
                    borderColor: `${category.color}40`,
                    color: category.color
                  } : {}}
                        >
                          {skill.name}
                  {skill.level === "strong" && skill.deployed && (
                    <span className="ml-1.5 text-[10px] opacity-50">●</span>
                  )}
                </motion.button>
                      ))}
                  </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-surface-1 border border-white/[0.08] rounded-2xl p-6 max-w-md w-full space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading font-semibold">{selectedSkill}</h3>
              <button
                onClick={() => setSelectedSkill(null)}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                  <X className="w-4 h-4" />
              </button>
              </div>
              
            <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Used in</p>
              <div className="flex flex-wrap gap-2">
                  {detail.projects.map((project) => (
                    <Link
                      key={project.name}
                      href={project.href}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm hover:bg-accent/15 transition-colors"
                  >
                      {project.name}
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                ))}
              </div>
            </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Example usage</p>
                <p className="text-sm text-slate-300">{detail.example}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="flex items-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-400" />
          <span>Deployed in production</span>
          </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span>Used in projects</span>
        </div>
      </div>
    </section>
  );
}
