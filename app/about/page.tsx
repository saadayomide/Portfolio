"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/about/StorySection";
import { TimelineSlider } from "@/components/about/TimelineSlider";
import { OperatingPrinciples } from "@/components/about/OperatingPrinciples";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom py-12 space-y-24"
    >
      <StorySection />
      <TimelineSlider />
      <OperatingPrinciples />
    </motion.div>
  );
}
