import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Ej Caubat — Software Engineer and Enterprise Application Developer experienced in C#, .NET, banking systems, HR platforms, Azure DevOps, and AI-assisted engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  alternates: { canonical: `${profile.siteUrl}/` },
  title: {
    default: `${profile.name} — Software Engineer & Enterprise Application Developer`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Ej Caubat", "Software Engineer", "Enterprise Application Developer", "C#", ".NET",
    "Azure DevOps", "Banking Technology", "HRIS", "AI-assisted development", "Philippines",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    type: "website",
    url: `${profile.siteUrl}/`,
    title: `${profile.name} — Software Engineer`,
    description,
    siteName: profile.name,
    // TODO: Add an Open Graph image at public/images/og.png (1200x630).
    // images: [{ url: `${profile.siteUrl}/images/og.png`, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
