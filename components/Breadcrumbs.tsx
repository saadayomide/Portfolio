"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const projectNames: Record<string, string> = {
  "shopsmart": "ShopSmart",
  "government-spending": "Government Spending Tracker",
  "lost-found": "Lost & Found",
  "dropout-prediction": "Student Dropout Prediction",
  "predictive-social": "Predictive Social Media",
};

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { href: "/", label: "Home", isHome: true },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = projectNames[segment] ||
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      return { href, label, isHome: false };
    }),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-3 border-t border-white/[0.03]"
    >
      <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <div key={item.href} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              )}
              {item.isHome ? (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-accent transition-colors p-1 rounded"
                  aria-label="Home"
                >
                  <Home className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors px-1.5 py-0.5 rounded ${
                    isLast
                      ? "text-slate-300"
                      : "text-slate-500 hover:text-accent"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </motion.div>
  );
}
