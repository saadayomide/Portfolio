"use client";

import { useState } from "react";
import { Database, Brain, Cloud, ArrowRight, Server, Monitor, Cog, Zap, BarChart3, GitBranch, Rocket, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const tabs = [
  { id: "software", label: "Systems", icon: Layers },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "devops", label: "DevOps", icon: Cloud },
];

const proofLinks: Record<string, { name: string; href: string }[]> = {
  api: [
    { name: "ShopSmart", href: "/projects/shopsmart" },
    { name: "Gov Tracker", href: "/projects/government-spending" },
  ],
  service: [
    { name: "Matching Engine", href: "/projects/shopsmart" },
  ],
  database: [
    { name: "PostgreSQL", href: "/projects/government-spending" },
  ],
  data: [
    { name: "OULAD Dataset", href: "/projects/dropout-prediction" },
  ],
  model: [
    { name: "Ensemble Models", href: "/projects/dropout-prediction" },
  ],
  evaluate: [
    { name: "SHAP Analysis", href: "/projects/dropout-prediction" },
  ],
  cicd: [
    { name: "GitHub Actions", href: "/projects/government-spending" },
    { name: "93% Coverage", href: "/projects/government-spending" },
  ],
  deploy: [
    { name: "Azure", href: "/projects/shopsmart" },
    { name: "Docker", href: "/projects/shopsmart" },
  ],
  monitor: [
    { name: "Prometheus", href: "/projects/government-spending" },
  ],
};

interface NodeProps {
  icon: React.ElementType;
  label: string;
  nodeKey: string;
  delay?: number;
  tooltipPosition?: "top" | "bottom";
}

function DiagramNode({ icon: Icon, label, nodeKey, delay = 0, tooltipPosition = "bottom" }: NodeProps) {
  const [showPanel, setShowPanel] = useState(false);
  const links = proofLinks[nodeKey] || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="relative"
    >
      <button
        onMouseEnter={() => setShowPanel(true)}
        onMouseLeave={() => setShowPanel(false)}
        onFocus={() => setShowPanel(true)}
        onBlur={() => setShowPanel(false)}
        className="relative flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 min-w-[80px]"
      >
        <Icon className="w-6 h-6 text-accent" />
        <span className="text-xs text-slate-400 font-medium">{label}</span>
        
        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5">
          <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-accent" />
        </span>
      </button>
      
      <AnimatePresence>
        {showPanel && links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: tooltipPosition === "top" ? 8 : -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: tooltipPosition === "top" ? 8 : -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 left-1/2 -translate-x-1/2 bg-surface-0 border border-white/15 rounded-2xl p-5 min-w-[200px] shadow-2xl",
              tooltipPosition === "top" ? "bottom-full mb-4" : "top-full mt-4"
            )}
          >
            {/* Arrow */}
            <div 
              className={cn(
                "absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-surface-0 border-white/15 rotate-45",
                tooltipPosition === "top" 
                  ? "-bottom-2 border-r border-b" 
                  : "-top-2 border-l border-t"
              )} 
            />
            
            <div className="relative space-y-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Projects
              </div>
              <div className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200 hover:text-accent hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-accent" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ConnectionLine({ direction = "vertical", delay = 0 }: { direction?: "vertical" | "horizontal"; delay?: number }) {
  if (direction === "horizontal") {
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.3 }}
        className="w-8 h-px bg-gradient-to-r from-accent/40 to-accent/20 flex-shrink-0"
      />
    );
  }
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="w-px h-6 bg-gradient-to-b from-accent/40 to-accent/20"
    />
  );
}

function SoftwareDiagram() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8 gap-1">
      <DiagramNode icon={Server} label="API" nodeKey="api" delay={0} tooltipPosition="bottom" />
      <ConnectionLine delay={0.1} />
      <div className="flex items-center gap-4">
        <DiagramNode icon={Cog} label="Service" nodeKey="service" delay={0.15} tooltipPosition="bottom" />
        <DiagramNode icon={Zap} label="Logic" nodeKey="service" delay={0.2} tooltipPosition="bottom" />
      </div>
      <ConnectionLine delay={0.25} />
      <DiagramNode icon={Database} label="Database" nodeKey="database" delay={0.3} tooltipPosition="top" />
    </div>
  );
}

function AIDiagram() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8 gap-4">
      {/* Top row */}
      <div className="flex items-center gap-3">
        <DiagramNode icon={Database} label="Data" nodeKey="data" delay={0} tooltipPosition="bottom" />
        <ConnectionLine direction="horizontal" delay={0.1} />
        <DiagramNode icon={Brain} label="Model" nodeKey="model" delay={0.15} tooltipPosition="bottom" />
      </div>
      {/* Center arrow down */}
      <ConnectionLine delay={0.2} />
      {/* Bottom */}
      <DiagramNode icon={BarChart3} label="Evaluate" nodeKey="evaluate" delay={0.25} tooltipPosition="top" />
    </div>
  );
}

function DevOpsDiagram() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8 gap-4">
      {/* Top row: CI/CD */}
      <DiagramNode icon={GitBranch} label="CI/CD" nodeKey="cicd" delay={0} tooltipPosition="bottom" />
      <ConnectionLine delay={0.1} />
      {/* Middle row */}
      <div className="flex items-center gap-3">
        <DiagramNode icon={Rocket} label="Deploy" nodeKey="deploy" delay={0.15} tooltipPosition="top" />
        <ConnectionLine direction="horizontal" delay={0.2} />
        <DiagramNode icon={Monitor} label="Monitor" nodeKey="monitor" delay={0.25} tooltipPosition="top" />
      </div>
    </div>
  );
}

export function ConsoleWidget() {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-md card-premium p-1"
    >
      <div className="bg-surface-1/80 backdrop-blur-xl rounded-[14px] p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-500 font-mono">what_i_build.tsx</span>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1.5 bg-white/[0.02] rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-accent/15 text-accent shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Diagram area - taller with more padding */}
        <div className="relative h-72 rounded-xl bg-white/[0.01] border border-white/[0.04]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {activeTab === "software" && <SoftwareDiagram />}
              {activeTab === "ai" && <AIDiagram />}
              {activeTab === "devops" && <DevOpsDiagram />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer hint */}
        <p className="text-center text-xs text-slate-500 pt-2">
          Hover nodes to see project links
        </p>
      </div>
    </motion.div>
  );
}
