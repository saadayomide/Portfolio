"use client";

import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Pillars } from "@/components/home/Pillars";
import { ProofStrip } from "@/components/home/ProofStrip";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function ViewToggleDemo() {
  const [mode, setMode] = useState<"recruiter" | "engineer">("recruiter");

  useEffect(() => {
    const stored = localStorage.getItem("complexityMode") as "recruiter" | "engineer";
    if (stored) setMode(stored);
  }, []);

  const toggle = (newMode: "recruiter" | "engineer") => {
    setMode(newMode);
    localStorage.setItem("complexityMode", newMode);
    window.dispatchEvent(new Event("complexityModeChange"));
  };

  const recruiterExample = [
    "Built a price comparison platform",
    "Achieved 93% test coverage",
    "Deployed to Azure cloud",
  ];

  const engineerExample = [
    "FastAPI + SQLAlchemy with async scrapers",
    "pytest fixtures, integration tests, CI gates",
    "Docker → Azure App Service + PostgreSQL",
  ];

  return (
    <div className="space-y-8">
      {/* Toggle buttons */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
          <button
            onClick={() => toggle("recruiter")}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all",
              mode === "recruiter"
                ? "bg-accent/15 text-accent"
                : "text-slate-400 hover:text-white"
            )}
          >
            <Eye className="w-4 h-4" />
            Recruiter View
          </button>
          <button
            onClick={() => toggle("engineer")}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all",
              mode === "engineer"
                ? "bg-accent/15 text-accent"
                : "text-slate-400 hover:text-white"
            )}
          >
            <Code className="w-4 h-4" />
            Engineer View
          </button>
        </div>
      </div>

      {/* Example comparison */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          animate={{ 
            opacity: mode === "recruiter" ? 1 : 0.4,
            scale: mode === "recruiter" ? 1 : 0.98
          }}
          className={cn(
            "rounded-2xl p-6 border transition-all",
            mode === "recruiter" 
              ? "bg-accent/5 border-accent/20" 
              : "bg-white/[0.02] border-white/[0.06]"
          )}
        >
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-accent" />
            <h4 className="font-heading font-semibold">Recruiter View</h4>
          </div>
          <p className="text-xs text-slate-500 mb-4">Outcomes & impact focused</p>
          <ul className="space-y-3">
            {recruiterExample.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          animate={{ 
            opacity: mode === "engineer" ? 1 : 0.4,
            scale: mode === "engineer" ? 1 : 0.98
          }}
          className={cn(
            "rounded-2xl p-6 border transition-all",
            mode === "engineer" 
              ? "bg-accent/5 border-accent/20" 
              : "bg-white/[0.02] border-white/[0.06]"
          )}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-accent" />
            <h4 className="font-heading font-semibold">Engineer View</h4>
          </div>
          <p className="text-xs text-slate-500 mb-4">Technical details & architecture</p>
          <ul className="space-y-3">
            {engineerExample.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-mono text-slate-300">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <p className="text-center text-sm text-slate-500">
        This setting applies across all project case studies
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container-custom py-8 space-y-24 md:space-y-32">
      <Hero />
      <FeaturedProjects />
      <Pillars />
      <ProofStrip />
      
      {/* View Toggle Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-16"
      >
        {/* Background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04]" />
        
        <div className="relative space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Choose your depth level
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto">
              Switch between high-level summaries for quick scanning and detailed 
              technical breakdowns for deep dives.
            </p>
          </div>
          
          <ViewToggleDemo />
          
          <div className="flex justify-center pt-4">
            <Link 
              href="/projects" 
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-surface-0 font-semibold hover:shadow-glow transition-all"
            >
              See it in action
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
