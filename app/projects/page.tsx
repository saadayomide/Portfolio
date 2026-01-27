"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom py-12 space-y-12"
    >
      {/* Header */}
      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20"
        >
          <Briefcase className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Selected work</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Projects & <span className="text-gradient">Case Studies</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          End-to-end systems I've built, from concept to deployment. Each project includes 
          detailed technical breakdowns and lessons learned.
        </p>
      </section>

      <ProjectsIndex />
    </motion.div>
  );
}
