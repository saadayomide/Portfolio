"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const socialLinks = [
  { 
    href: "mailto:solowolayemo.ieu2023@student.ie.edu", 
    icon: Mail, 
    label: "Email",
    description: "Best for formal inquiries",
    color: "#00ff88"
  },
  { 
    href: "https://www.linkedin.com/in/saad-ayomide-olowolayemo-bbb2a8300/", 
    icon: Linkedin, 
    label: "LinkedIn",
    description: "Let's connect professionally",
    color: "#0077b5"
  },
  { 
    href: "https://github.com/saadayomide", 
    icon: Github, 
    label: "GitHub",
    description: "See my code",
    color: "#8b5cf6"
  },
];

const subjects = [
  "Internship opportunity",
  "Project collaboration",
  "Technical discussion",
  "Feedback on portfolio",
  "Other",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Open to opportunities</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Let&apos;s build something <span className="text-gradient">together</span>.
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          I&apos;m actively looking for internship opportunities in software engineering, 
          AI/ML, or backend development. Let&apos;s connect!
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-3 gap-4"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-6 hover:border-white/[0.12] transition-all"
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 0%, ${link.color}08 0%, transparent 60%)` }}
              />
              <div className="relative flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: link.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{link.description}</p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Send className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-2xl font-heading font-semibold">Send a message</h2>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">Message sent!</h3>
              <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="" className="bg-surface-1">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-surface-1">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-surface-0 transition-all",
                  isSubmitting
                    ? "bg-accent/70 cursor-not-allowed"
                    : "bg-accent hover:shadow-glow"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-surface-0/30 border-t-surface-0 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
