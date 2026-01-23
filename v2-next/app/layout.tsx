import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

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
  title: "Ümmügülsün Türkmen | The Zen Editor",
  description: "Senior Frontend Developer & Creative Coder. Code is art, art is code.",
  keywords: ["Ümmügülsün Türkmen", "Frontend Developer", "Portfolio", "Web Development", "TypeScript", "Next.js"],
  authors: [{ name: "Ümmügülsün Türkmen" }],
  creator: "Ümmügülsün Türkmen",
  publisher: "Ümmügülsün Türkmen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ummugulsun.me",
    title: "Ümmügülsün Türkmen | The Zen Editor",
    description: "Senior Frontend Developer & Creative Coder. Code is art, art is code.",
    siteName: "Ümmügülsün Türkmen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ümmügülsün Türkmen | The Zen Editor",
    description: "Senior Frontend Developer & Creative Coder. Code is art, art is code.",
    creator: "@ummugulsun",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        {children}
      </body>
    </html>
  );
}
