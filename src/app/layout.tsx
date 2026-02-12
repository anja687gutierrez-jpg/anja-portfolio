import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anja Gutierrez — Full-Stack Developer",
  description:
    "Portfolio of Anja Gutierrez. Full-stack developer building production-quality web applications — from static marketing sites to full Next.js dashboards with 23 pages and 29K+ lines of TypeScript.",
  authors: [{ name: "Anja Gutierrez" }],
  creator: "Anja Gutierrez",
  openGraph: {
    title: "Anja Gutierrez — Full-Stack Developer",
    description:
      "Full-stack developer building production-quality web applications from original research. React, Next.js, TypeScript, Firebase, Supabase.",
    type: "website",
    locale: "en_US",
    siteName: "Anja Gutierrez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anja Gutierrez — Full-Stack Developer",
    description:
      "Full-stack developer building production-quality web applications. 23-page fleet dashboard, 29K+ lines, zero TypeScript errors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
