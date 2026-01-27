"use client";

import { useState, useEffect } from "react";
import { Github, ExternalLink, Play, ChevronDown, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCaseStudyProps {
  project: {
    title: string;
    problem: { recruiter: string[]; engineer: string[] };
    outcome: {
      mvp: string;
      deployed: string;
      features: string[];
      owned?: string[];
    };
    architecture: {
      components: { name: string; description: string }[];
    };
    decisions: {
      title: string;
      why: string;
      tradeoffs: string;
      alternatives: string[];
      failureModes: string;
    }[];
    deepDive: Record<string, { recruiter: string[]; engineer: string[] }>;
    demo: { description: string; videoUrl: string | null; liveUrl: string | null };
    whatsNext: Record<string, { title: string; intent: string; complexity: string }[]>;
    tags: string[];
    links: { github?: string; demo?: string; readme?: string };
  };
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const [complexity, setComplexity] = useState<"recruiter" | "engineer">("recruiter");
  const [activeTab, setActiveTab] = useState("api");

  useEffect(() => {
    const stored = localStorage.getItem("complexityMode") as "recruiter" | "engineer";
    if (stored) setComplexity(stored);

    const handleChange = () => {
      const newMode = localStorage.getItem("complexityMode") as "recruiter" | "engineer";
      if (newMode) setComplexity(newMode);
    };
    window.addEventListener("complexityModeChange", handleChange);
    return () => window.removeEventListener("complexityModeChange", handleChange);
  }, []);

  const tabs = [
    { id: "api", label: "API" },
    { id: "dataModel", label: "Data Model" },
    { id: "coreLogic", label: "Core Logic" },
    { id: "testing", label: "Testing" },
    { id: "deployment", label: "Deployment" },
  ];

  return (
    <article className="space-y-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </motion.header>

      {/* Problem / Goal */}
      <Section title="Problem / Goal" delay={0.1}>
        <div className="space-y-3">
          {project.problem[complexity].map((item: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 text-slate-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Outcome */}
      <Section title="Outcome" delay={0.15}>
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">MVP Status</p>
              <p className="text-slate-200">{project.outcome.mvp}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Deployed</p>
              <p className="text-slate-200">{project.outcome.deployed}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Key Features</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.outcome.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          {project.outcome.owned && (
            <div className="pt-4 border-t border-white/[0.04]">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">What I Owned</p>
              <div className="flex flex-wrap gap-2">
                {project.outcome.owned.map((item: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.04] text-xs text-slate-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Architecture */}
      <Section title="Architecture" delay={0.2}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.architecture.components.map((comp, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 space-y-2 hover:border-white/[0.1] transition-colors"
            >
              <h3 className="font-heading font-semibold text-white">{comp.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{comp.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Technical Decisions */}
      <Section title="Key Technical Decisions" delay={0.25}>
        <div className="space-y-4">
          {project.decisions.map((decision, idx: number) => (
            <DecisionCard key={idx} decision={decision} complexity={complexity} index={idx} />
          ))}
        </div>
      </Section>

      {/* Deep Dive Tabs */}
      <Section title="Deep Dive" delay={0.3}>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 p-1 bg-white/[0.02] rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium rounded-lg transition-all",
                  activeTab === tab.id
                    ? "bg-accent/15 text-accent"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6"
          >
            <div className="space-y-2">
              {project.deepDive[activeTab][complexity].map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="font-mono text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Demo */}
      <Section title="Demo" delay={0.35}>
        <div className="rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1] p-16 text-center">
          {project.demo.videoUrl ? (
            <video src={project.demo.videoUrl} controls className="w-full rounded-lg" />
          ) : (
            <>
              <Play className="w-12 h-12 mx-auto mb-4 text-slate-600" />
              <p className="text-slate-500">Demo coming soon</p>
              <p className="text-xs text-slate-600 mt-2">{project.demo.description}</p>
            </>
          )}
        </div>
      </Section>

      {/* What's Next */}
      <Section title="What's Next" delay={0.4}>
        <div className="grid md:grid-cols-3 gap-6">
          {(["now", "next", "later"] as const).map((stage, stageIdx) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stageIdx * 0.1 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 space-y-4"
            >
              <h3 className="font-heading font-semibold capitalize flex items-center gap-2">
                {stage === "now" && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                {stage}
              </h3>
              <div className="space-y-3">
                {project.whatsNext[stage].map((item, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm text-slate-200">{item.title}</span>
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded font-medium",
                        item.complexity === "S" && "bg-emerald-500/20 text-emerald-400",
                        item.complexity === "M" && "bg-amber-500/20 text-amber-400",
                        item.complexity === "L" && "bg-rose-500/20 text-rose-400"
                      )}>
                        {item.complexity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{item.intent}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </article>
  );
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-heading font-semibold">{title}</h2>
      {children}
    </motion.section>
  );
}

function DecisionCard({ 
  decision, 
  complexity, 
  index 
}: { 
  decision: { title: string; why: string; tradeoffs: string; alternatives: string[]; failureModes: string };
  complexity: "recruiter" | "engineer";
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:border-white/[0.1] transition-colors"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 text-left flex items-center justify-between gap-4"
      >
        <h3 className="font-heading font-semibold text-white">{decision.title}</h3>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
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
            <div className="px-5 pb-5 space-y-4 border-t border-white/[0.04] pt-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Why</p>
                <p className="text-sm text-slate-300">{decision.why}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tradeoffs</p>
                <p className="text-sm text-slate-400">{decision.tradeoffs}</p>
              </div>
              {complexity === "engineer" && (
                <>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Alternatives</p>
                    <div className="flex flex-wrap gap-2">
                      {decision.alternatives.map((alt) => (
                        <span key={alt} className="px-2.5 py-1 rounded-md text-xs bg-white/[0.03] border border-white/[0.06] text-slate-400">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Failure Modes</p>
                    <p className="text-sm text-slate-400">{decision.failureModes}</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
