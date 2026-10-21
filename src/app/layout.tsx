import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionConfig } from "framer-motion";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const cormorant = localFont({
  src: "../../public/fonts/cormorant-garamond-latin-wght-normal.woff2",
  variable: "--font-cormorant",
  weight: "300 700",
  style: "normal",
  display: "swap",
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TrueStride Equine",
    template: "%s | TrueStride Equine",
  },
  description:
    "Horse-first equine transportation shaped around thoughtful engineering and a more considered journey.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <SiteFooter />
      </body>
    </html>
  );
}
