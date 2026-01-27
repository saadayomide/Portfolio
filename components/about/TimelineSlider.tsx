"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2023",
    title: "Predictive Social Media",
    role: "Co-Founder & Principal Engineer",
    description: "Started building end-to-end AI systems for content intelligence",
    href: "/projects/predictive-social",
    color: "#ec4899",
  },
  {
    year: "2024",
    title: "IE Student Government",
    role: "Research Analyst",
    description: "Applied ML to analyze student needs and derive policy insights",
    color: "#3b82f6",
  },
  {
    year: "2025",
    title: "ShopSmart",
    role: "Co-Founder & Principal Engineer",
    description: "Built full-stack price comparison with scraping and Azure deployment",
    href: "/projects/shopsmart",
    color: "#00ff88",
  },
  {
    year: "2025",
    title: "Government Tracker",
    role: "Founder & Principal Engineer",
    description: "Achieved 93% test coverage with CI/CD and production observability",
    href: "/projects/government-spending",
    color: "#8b5cf6",
  },
  {
    year: "2025",
    title: "Dropout Prediction",
    role: "Founder & Principal Engineer",
    description: "Developed ensemble ML pipeline with SHAP and fairness analysis",
    href: "/projects/dropout-prediction",
    color: "#f59e0b",
  },
];

export function TimelineSlider() {
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, milestones.length - 1));
    setActiveIndex(clamped);
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[clamped]) {
        const card = cards[clamped] as HTMLElement;
        const containerWidth = scrollRef.current.clientWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        scrollRef.current.scrollTo({
          left: cardLeft - containerWidth / 2 + cardWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-heading font-bold">Timeline</h2>
          <p className="text-slate-400 mt-2">Key milestones in my journey</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === milestones.length - 1}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Timeline Track */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/[0.04] rounded-full">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between pt-4">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className="relative group"
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index <= activeIndex ? "bg-accent" : "bg-white/20"
                )}
              />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {milestone.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "flex-shrink-0 w-72 snap-center rounded-2xl overflow-hidden transition-all duration-300",
              "bg-gradient-to-b from-white/[0.04] to-transparent border",
              index === activeIndex ? "border-white/[0.15]" : "border-white/[0.06]"
            )}
            style={index === activeIndex ? { borderColor: `${milestone.color}40` } : {}}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                {milestone.year}
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">{milestone.title}</h3>
              <p className="text-xs text-slate-500">{milestone.role}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{milestone.description}</p>
              {milestone.href && (
                <Link
                  href={milestone.href}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  style={{ color: milestone.color }}
                >
                  View project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {milestones.map((milestone, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === activeIndex 
                ? "w-6" 
                : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
            style={index === activeIndex ? { backgroundColor: milestone.color } : {}}
          />
        ))}
      </div>
    </motion.section>
  );
}
