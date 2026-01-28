"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Code, User, Briefcase, Sparkles, Wrench, ArrowRight, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  category: string;
  keywords?: string[];
}

const commands: CommandItem[] = [
  { id: "home", label: "Home", href: "/", icon: <FileText className="w-4 h-4" />, category: "Pages", keywords: ["start", "main"] },
  { id: "about", label: "About", href: "/about", icon: <User className="w-4 h-4" />, category: "Pages", keywords: ["bio", "story", "me"] },
  { id: "skills", label: "Skills", href: "/skills", icon: <Code className="w-4 h-4" />, category: "Pages", keywords: ["tech", "stack", "abilities"] },
  { id: "projects", label: "Projects", href: "/projects", icon: <Briefcase className="w-4 h-4" />, category: "Pages", keywords: ["work", "portfolio"] },
  { id: "playground", label: "Playground", href: "/playground", icon: <Sparkles className="w-4 h-4" />, category: "Pages", keywords: ["demos", "experiments"] },
  { id: "contact", label: "Contact", href: "/contact", icon: <FileText className="w-4 h-4" />, category: "Pages", keywords: ["email", "reach", "hire"] },
  { id: "shopsmart", label: "ShopSmart", href: "/projects/shopsmart", icon: <Briefcase className="w-4 h-4" />, category: "Projects", keywords: ["price", "comparison", "scraping", "azure", "fastapi"] },
  { id: "lost-found", label: "Lost & Found", href: "/projects/lost-found", icon: <Briefcase className="w-4 h-4" />, category: "Projects", keywords: ["java", "javafx", "desktop"] },
  { id: "gov-spending", label: "Government Spending Tracker", href: "/projects/government-spending", icon: <Briefcase className="w-4 h-4" />, category: "Projects", keywords: ["budget", "testing", "cicd", "93%"] },
  { id: "dropout-prediction", label: "Student Dropout Prediction", href: "/projects/dropout-prediction", icon: <Briefcase className="w-4 h-4" />, category: "Projects", keywords: ["ml", "machine learning", "shap", "fairness"] },
  { id: "predictive-social", label: "Predictive Social Media", href: "/projects/predictive-social", icon: <Briefcase className="w-4 h-4" />, category: "Projects", keywords: ["tiktok", "rag", "embeddings", "ai"] },
  { id: "skill-python", label: "Python", href: "/skills#python", icon: <Wrench className="w-4 h-4" />, category: "Skills", keywords: ["programming", "language"] },
  { id: "skill-fastapi", label: "FastAPI", href: "/skills#fastapi", icon: <Wrench className="w-4 h-4" />, category: "Skills", keywords: ["backend", "api", "framework"] },
  { id: "skill-azure", label: "Azure", href: "/skills#azure", icon: <Wrench className="w-4 h-4" />, category: "Skills", keywords: ["cloud", "deployment", "devops"] },
  { id: "skill-ml", label: "Machine Learning", href: "/skills#ml", icon: <Wrench className="w-4 h-4" />, category: "Skills", keywords: ["ai", "scikit", "tensorflow", "pytorch"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredCommands = useMemo(() => {
    if (!query) return commands;
    const lower = query.toLowerCase();
    return commands.filter((cmd) =>
      cmd.label.toLowerCase().includes(lower) ||
      cmd.keywords?.some(k => k.includes(lower))
  );
  }, [query]);

  const groupedCommands = useMemo(() => {
    return filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);
  }, [filteredCommands]);

  const categoryOrder = ["Pages", "Projects", "Skills"];
  const sortedCategories = categoryOrder.filter(cat => groupedCommands[cat]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        router.push(filteredCommands[selectedIndex].href);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, router, onClose]);

  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      selected?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-4 top-[12vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 w-auto md:w-full md:max-w-xl"
          >
            <div className="bg-surface-1 border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.04]">
                <Search className="w-5 h-5 text-slate-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
                  onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, skills..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-base"
          />
                <kbd className="hidden sm:block text-[10px] px-2 py-1 rounded bg-white/[0.06] text-slate-500 font-mono">
            ESC
          </kbd>
        </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
                {sortedCategories.map((category) => (
                  <div key={category} className="mb-2">
                    <div className="px-3 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                {category}
              </div>
                    {groupedCommands[category].map((cmd) => {
                const globalIndex = filteredCommands.indexOf(cmd);
                      const isSelected = globalIndex === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                          data-index={globalIndex}
                    onClick={() => {
                      router.push(cmd.href);
                      onClose();
                    }}
                    className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                            isSelected
                              ? "bg-accent/10 text-accent"
                              : "text-slate-300 hover:bg-white/[0.04]"
                    )}
                  >
                          <span className={cn(
                            "transition-colors",
                            isSelected ? "text-accent" : "text-slate-500"
                          )}>
                            {cmd.icon}
                          </span>
                          <span className="flex-1 font-medium text-sm">{cmd.label}</span>
                          {isSelected && (
                            <ArrowRight className="w-4 h-4 text-accent" />
                          )}
                  </button>
                );
              })}
            </div>
          ))}

          {filteredCommands.length === 0 && (
                  <div className="px-4 py-12 text-center">
                    <p className="text-slate-500 text-sm">No results for &quot;{query}&quot;</p>
            </div>
          )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.04] text-[11px] text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] font-mono">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CornerDownLeft className="w-3 h-3" />
                    Select
                  </span>
        </div>
      </div>
    </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
