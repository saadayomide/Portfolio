"use client";

import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { SkillEvidenceGallery } from "@/components/skills/SkillEvidenceGallery";

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom py-12 space-y-20"
    >
      {/* Header */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
        >
          <Code className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Technical capabilities</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Skills & <span className="text-gradient">Expertise</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Technologies I've worked with across production systems, personal projects, 
          and continuous learning. Click any skill to see where I've applied it.
        </p>
      </section>

      <SkillsMatrix />
      <SkillEvidenceGallery />
    </motion.div>
  );
}
