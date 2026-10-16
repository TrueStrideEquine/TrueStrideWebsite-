import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueStride Equine",
  description: "Equine transportation website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
