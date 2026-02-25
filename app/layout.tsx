import type { Metadata } from "next";
import { generatePageMetadata, SITE_CONFIG } from "./lib/metadata";
import "./globals.css";

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
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
