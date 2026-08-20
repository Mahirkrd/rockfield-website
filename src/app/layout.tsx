import type { Metadata, Viewport } from "next";
import { archivo, inter, plexMono } from "./fonts";
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
      <body className="min-h-dvh bg-concrete font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
