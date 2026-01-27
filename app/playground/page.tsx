"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PlaygroundIndex } from "@/components/playground/PlaygroundIndex";

export default function PlaygroundPage() {
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-400">Interactive demos</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Playground & <span className="text-gradient">Experiments</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Hands-on demonstrations of concepts and patterns I've learned. 
          Explore and interact to understand how things work under the hood.
        </p>
      </section>

      <PlaygroundIndex />
    </motion.div>
  );
}
