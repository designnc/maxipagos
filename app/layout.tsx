import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxipagos - Simplifica tus pagos con Maxipagos",
  description:
    "Maxipagos es la plataforma de pagos que simplifica tu gestión de cobros y pagos. Automatiza tus procesos y haz crecer tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollRevealInitializer />
        {children}
      </body>
    </html>
  );
}
