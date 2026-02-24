import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Taxi Amsterdam | Betrouwbare Taximservice",
  description: "Professionele taximservice in Amsterdam. Luxe Mercedes en Tesla vloot. Directe contact, vaste prijzen.",
};

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
