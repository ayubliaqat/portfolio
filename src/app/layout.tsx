import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SmoothScroll from "@/components/layouts/SmoothScroll";
import HeroCanvas from "@/components/canvas/HeroScene";

/* ============================================================================
   PRODUCTION METADATA CONFIGURATION
   ============================================================================ */
const PRODUCTION_URL = "https://ayubliaqat.dev"; // Production Domain Placeholder

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: "Ayub Liaqat | Full Stack Developer & Tech Lead Portfolio",
    template: "%s | Ayub Liaqat",
  },
  description:
    "Immersive digital workspace and professional portfolio of Muhammad Ayub Liaqat, Full Stack Developer and Technical Consultant specializing in Next.js, React, TypeScript, Three.js, and Node.js.",
  keywords: [
    "Ayub Liaqat",
    "Full Stack Developer",
    "Technical Lead",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Three.js",
    "Node.js",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Lahore",
  ],
  authors: [{ name: "Muhammad Ayub Liaqat", url: PRODUCTION_URL }],
  creator: "Muhammad Ayub Liaqat",
  publisher: "Muhammad Ayub Liaqat",
  applicationName: "Ayub Liaqat Portfolio",
  category: "Technology",
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
  alternates: {
    canonical: PRODUCTION_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRODUCTION_URL,
    siteName: "Ayub Liaqat Portfolio",
    title: "Ayub Liaqat | Full Stack Developer & Tech Lead",
    description:
      "Explore the interactive digital workspace and high-performance web engineering portfolio of Muhammad Ayub Liaqat.",
    images: [
      {
        url: `${PRODUCTION_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ayub Liaqat - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayub Liaqat | Full Stack Developer",
    description:
      "Immersive portfolio showcasing modern web architecture with Next.js, React, and Three.js.",
    creator: "@ayubliaqat",
    images: [`${PRODUCTION_URL}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ============================================================================
   ROOT LAYOUT COMPONENT
   ============================================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        {/* ==================================================================
           1. IMMERSIVE 3D BACKGROUND (Fixed Layer)
           ================================================================== */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
          <HeroCanvas />
        </div>

        {/* ==================================================================
           2. SMOOTH SCROLLING & MAIN CONTENT WRAPPER
           ================================================================== */}
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen z-10">
            {/* Global Navigation Header */}
            <Header />

            {/* Main Application Viewport */}
            <main id="main-content" className="flex-grow relative">
              {children}
            </main>

            {/* Global Footer */}
            <Footer />
          </div>
        </SmoothScroll>

        {/* ==================================================================
           3. FUTURE EXTENSIONS PORTAL HOOKS
           (Ready for Theme Provider, Toast Notifier, Command Palette, etc.)
           ================================================================== */}
      </body>
    </html>
  );
}