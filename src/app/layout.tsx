import type { Metadata, Viewport } from "next";
import { archivo, inter, plexMono } from "./fonts";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { darkSurfaceLogoSrc } from "@/lib/logo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rockfield — General Contracting",
  description:
    "Rockfield for General Contracting Ltd. Built on solid ground.",
};

export const viewport: Viewport = {
  themeColor: "#141410",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-concrete font-sans text-ink antialiased">
        <Header darkLogoSrc={darkSurfaceLogoSrc()} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
