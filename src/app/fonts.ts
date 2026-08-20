import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";

/** Headlines — bold, uppercase. Variable weight 100–900. */
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

/** Body copy. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Small technical labels — spec-sheet numbering, eyebrows, metadata. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});
