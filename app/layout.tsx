import type { Metadata } from "next";
import { ComplexityProvider } from "@/lib/context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Ayomide Olowolayemo | Software & AI Engineer",
  description: "Computer Science & AI student building production-ready systems at the intersection of software engineering and applied AI/ML. Open to internship opportunities.",
  keywords: ["software engineer", "AI/ML", "full-stack", "Python", "FastAPI", "machine learning", "portfolio"],
  authors: [{ name: "Saad Ayomide Olowolayemo" }],
  openGraph: {
    title: "Saad Ayomide Olowolayemo | Software & AI Engineer",
    description: "Building production-ready systems at the intersection of software engineering and applied AI/ML",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <ComplexityProvider>
        <Header />
          <main className="min-h-screen">
            {children}
          </main>
        <Footer />
        </ComplexityProvider>
      </body>
    </html>
  );
}
