import type { Metadata } from "next";
import { Inter, Orbitron, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* Fonts */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vice City",
  description: "A neon-soaked GTA Vice City inspired experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${permanentMarker.variable}`}
    >
      <body className="antialiased dark:bg-vice-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
