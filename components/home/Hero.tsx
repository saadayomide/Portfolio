"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin, Shield, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ConsoleWidget } from "./ConsoleWidget";

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const badges = [
  { icon: MapPin, label: "Madrid, Spain", color: "text-blue-400" },
  { icon: Shield, label: "US work authorization", color: "text-emerald-400" },
  { icon: GraduationCap, label: "IE internship agreement", color: "text-violet-400" },
];

export function Hero() {
  return (
    <section className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-12">
      {/* Background accent orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          {/* Profile + Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-5"
          >
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10">
                <img
                  src={`${basePath}/profile.jpg`}
                  alt="Saad Ayomide Olowolayemo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-surface-0 flex items-center justify-center">
                <span className="w-2 h-2 bg-surface-0 rounded-full" />
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold">
                Saad Ayomide <span className="text-accent">Olowolayemo</span>
        </h1>
              <p className="text-slate-400 mt-1">Software & AI/ML Engineer</p>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Available for internships</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15]">
            Building{" "}
            <span className="text-gradient">production-ready</span>{" "}
            systems at the intersection of{" "}
            <span className="relative inline-block">
              software
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#00ff88"/>
                    <stop offset="1" stopColor="#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            and{" "}
            <span className="text-gradient">AI/ML</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            CS & AI student crafting practical systems with modern engineering practices. 
            Passionate about clean architecture, responsible ML, and shipping impactful products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm"
              >
                <Icon className={`w-4 h-4 ${badge.color}`} />
                <span className="text-slate-300">{badge.label}</span>
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-7 py-4 bg-accent text-surface-0 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] font-medium hover:bg-white/[0.06] hover:border-white/[0.12] transition-all"
          >
            <Download className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
            Resume
          </a>
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] font-medium hover:bg-white/[0.06] hover:border-white/[0.12] transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
            Contact
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex justify-center lg:justify-end"
      >
        <ConsoleWidget />
      </motion.div>
    </section>
  );
}
