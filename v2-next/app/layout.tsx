import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Breadcrumb from "@/components/Breadcrumb";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";
import TerminalPanel from "@/components/TerminalPanel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ümmügülsün Türkmen | Portfolio",
  description:
    "Computer Engineering Student. Building at the intersection of AI, mobile & web.",
  keywords: [
    "Ümmügülsün Türkmen",
    "Computer Engineering",
    "Portfolio",
    "AI",
    "Mobile Development",
    "Web Development",
  ],
  authors: [{ name: "Ümmügülsün Türkmen" }],
  creator: "Ümmügülsün Türkmen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ummugulsun.me",
    title: "Ümmügülsün Türkmen | Portfolio",
    description:
      "Computer Engineering Student. Building at the intersection of AI, mobile & web.",
    siteName: "Ümmügülsün Türkmen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ümmügülsün Türkmen | Portfolio",
    description:
      "Computer Engineering Student. Building at the intersection of AI, mobile & web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d1117" />
      </head>
      <body className="antialiased">
        <div className="flex h-screen bg-[var(--color-editor-bg)] text-[var(--color-text-primary)]">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            <TabBar />
            <Breadcrumb />
            <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
              {children}
            </main>
            <TerminalPanel />
            <StatusBar />
          </div>
          <CommandPalette />
        </div>
      </body>
    </html>
  );
}
