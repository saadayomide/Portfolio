"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom py-12"
    >
      <ContactSection />
    </motion.div>
  );
}
