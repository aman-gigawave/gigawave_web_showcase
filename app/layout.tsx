import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/custom/Footer";
// import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Nunito, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Gigawave | Full-Stack App Development",
    template: "%s - Gigawave | Full-Stack App Development",
  },
  metadataBase: new URL("https://gigawave.io/"),
  category: "Full stack development company",
  description:
    "We build and maintain full-stack apps using Flutter, React, Next.js, Hono.js, Express.js, with deployments on Supabase, Firebase, Vercel, GCP, and Cloudflare—tailored for fast-scaling startups.",
  applicationName: "Gigawave",
  keywords: [
    "Full stack development",
    "Frontend Development",
    "Backend Development",
    "Flutter",
    "React",
    "Next.js",
    "Hono.js",
    "Express.js",
    "Supabase",
    "Firebase",
    "Vercel",
    "Cloudflare",
    "GCP",
    "Web Development",
    "App Development",
    "Startup Apps",
    "SaaS Development",
    "Gigawave",
  ],
  authors: [{ name: "Gigawave", url: "https://gigawave.io" }],
  twitter: {
    card: "summary_large_image",
  },
};

const primayFont = Nunito({
  subsets: ["latin"],
  variable: "--font-primary",
});

const secondaryFont = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn([
          primayFont.variable,
          secondaryFont.variable,
          "antialiased dark no-scrollbar overflow-y-auto relative font-primary !bg-black pb-20",
        ])}
      >
        <div
          style={{
            background: "url('/background/noise_1.webp')",
            opacity: "0.1",
            backgroundSize: "128px",
            backgroundRepeat: "repeat",
            backgroundColor: "black",
          }}
          className="absolute inset-0 -z-10 bg-neutral-900"
        />
        {children}
        <Footer />
        {/* <SmoothCursor /> */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
