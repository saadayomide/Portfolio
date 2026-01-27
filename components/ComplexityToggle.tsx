"use client";

import { useState, useEffect } from "react";
import { User, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ComplexityToggle() {
  const [mode, setModeState] = useState<"recruiter" | "engineer">("recruiter");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("complexityMode") as "recruiter" | "engineer";
    if (stored) {
      setModeState(stored);
    }
  }, []);

  const toggle = () => {
    const newMode = mode === "recruiter" ? "engineer" : "recruiter";
    setModeState(newMode);
    localStorage.setItem("complexityMode", newMode);
    window.dispatchEvent(new Event("complexityModeChange"));
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm font-medium">
        <User className="w-4 h-4" />
        <span>Recruiter View</span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden",
        mode === "engineer" 
          ? "bg-accent/10 border border-accent/30 text-accent shadow-glow-sm"
          : "bg-white/[0.03] border border-white/[0.06] text-slate-300 hover:bg-white/[0.05]"
      )}
      aria-label={`Switch to ${mode === "recruiter" ? "engineer" : "recruiter"} view`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-3"
        >
          {mode === "recruiter" ? (
            <>
              <User className="w-4 h-4" />
              <span>Recruiter View</span>
            </>
          ) : (
            <>
              <Code className="w-4 h-4" />
              <span>Engineer View</span>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Toggle indicator */}
      <div className={cn(
        "w-8 h-5 rounded-full relative transition-colors",
        mode === "engineer" ? "bg-accent/30" : "bg-white/10"
      )}>
        <motion.div
          animate={{ x: mode === "engineer" ? 14 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "absolute top-1 w-3 h-3 rounded-full",
            mode === "engineer" ? "bg-accent" : "bg-slate-400"
          )}
        />
      </div>
    </motion.button>
  );
}
