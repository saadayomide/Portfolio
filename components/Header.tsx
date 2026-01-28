"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Command } from "lucide-react";
import { CommandPalette } from "./CommandPalette";
import { Breadcrumbs } from "./Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/playground", label: "Playground" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-14" : "h-16 md:h-20"
            )}
          >
            {/* Logo / Name */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <span className={cn(
                "font-heading font-bold tracking-tight transition-all",
                isScrolled ? "text-xl" : "text-2xl"
              )}>
                <span className="text-accent">S</span>
                <span className="text-white">A</span>
                <span className="text-accent">O</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                <Link
                  key={item.href}
                  href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive 
                        ? "text-white" 
                        : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                    )}
                >
                  {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/[0.06] rounded-lg"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCommandOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all text-sm"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="hidden lg:inline text-slate-400">Search</span>
                <kbd className="hidden xl:flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-500 font-mono">
                  <Command className="w-2.5 h-2.5" />K
                </kbd>
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors"
              >
                <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                  <X className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                  <Menu className="w-5 h-5" />
                    </motion.div>
                )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-t border-white/[0.04]"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                  <Link
                    href={item.href}
                          className={cn(
                            "block px-4 py-3 rounded-lg transition-colors",
                            isActive
                              ? "bg-accent/10 text-accent"
                              : "text-slate-300 hover:bg-white/[0.03]"
                          )}
                  >
                    {item.label}
                  </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                <button
                  onClick={() => {
                    setIsCommandOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-white/[0.03] transition-colors"
                >
                  <Search className="w-4 h-4" />
                      Search
                      <kbd className="ml-auto text-xs px-2 py-0.5 rounded bg-white/[0.06] text-slate-500">
                        ⌘K
                      </kbd>
                </button>
                  </motion.div>
              </div>
              </motion.nav>
          )}
          </AnimatePresence>
        </div>

        <Breadcrumbs />
      </header>

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}
