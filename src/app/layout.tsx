import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anja Gutierrez — Full-Stack Developer & AI Builder",
  description:
    "Portfolio of Anja Gutierrez. 12+ production projects — operations dashboards, AI assistants, mobile apps, SaaS platforms, and developer tools.",
  authors: [{ name: "Anja Gutierrez" }],
  creator: "Anja Gutierrez",
  openGraph: {
    title: "Anja Gutierrez — Full-Stack Developer & AI Builder",
    description:
      "12+ production projects — operations dashboards, AI assistants, mobile apps, SaaS platforms, and developer tools.",
    type: "website",
    locale: "en_US",
    siteName: "Anja Gutierrez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anja Gutierrez — Full-Stack Developer & AI Builder",
    description:
      "12+ production projects — operations dashboards, AI assistants, mobile apps, SaaS platforms, and developer tools.",
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
