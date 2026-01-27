"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://github.com/saadayomide", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/saad-ayomide-olowolayemo-bbb2a8300/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:solowolayemo.ieu2023@student.ie.edu", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-24">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-bold">SAO</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Science & AI student building production-ready systems. 
              Open to internship opportunities.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-slate-300 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-medium text-slate-300 mb-4">Get in touch</h4>
            <a 
              href="mailto:solowolayemo.ieu2023@student.ie.edu"
              className="group flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors"
            >
              solowolayemo.ieu2023@student.ie.edu
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-slate-600 mt-4">Madrid, Spain</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Saad Ayomide Olowolayemo</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
