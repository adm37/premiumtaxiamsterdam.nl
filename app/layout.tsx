import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { generatePageMetadata, SITE_CONFIG } from "./lib/metadata";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = generatePageMetadata(
  SITE_CONFIG.title,
  SITE_CONFIG.description,
  "/"
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${poppins.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
