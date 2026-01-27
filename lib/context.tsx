"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ComplexityMode = "recruiter" | "engineer";

interface ComplexityContextType {
  complexity: ComplexityMode;
  setComplexity: (mode: ComplexityMode) => void;
  toggleComplexity: () => void;
}

const ComplexityContext = createContext<ComplexityContextType | undefined>(undefined);

export function ComplexityProvider({ children }: { children: ReactNode }) {
  const [complexity, setComplexityState] = useState<ComplexityMode>("recruiter");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("complexityMode") as ComplexityMode;
    if (stored === "recruiter" || stored === "engineer") {
      setComplexityState(stored);
    }

    const handleChange = () => {
      const newMode = localStorage.getItem("complexityMode") as ComplexityMode;
      if (newMode === "recruiter" || newMode === "engineer") {
        setComplexityState(newMode);
      }
    };
    window.addEventListener("complexityModeChange", handleChange);
    return () => window.removeEventListener("complexityModeChange", handleChange);
  }, []);

  const setComplexity = (mode: ComplexityMode) => {
    localStorage.setItem("complexityMode", mode);
    setComplexityState(mode);
    window.dispatchEvent(new Event("complexityModeChange"));
  };

  const toggleComplexity = () => {
    setComplexity(complexity === "recruiter" ? "engineer" : "recruiter");
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ComplexityContext.Provider value={{ complexity: "recruiter", setComplexity, toggleComplexity }}>
        {children}
      </ComplexityContext.Provider>
    );
  }

  return (
    <ComplexityContext.Provider value={{ complexity, setComplexity, toggleComplexity }}>
      {children}
    </ComplexityContext.Provider>
  );
}

export function useComplexity() {
  const context = useContext(ComplexityContext);
  if (context === undefined) {
    throw new Error("useComplexity must be used within a ComplexityProvider");
  }
  return context;
}
