import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.css";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FooDiv - Simplifica tus pagos con FooDiv",
  description:
    "FooDiv es la plataforma de pagos que simplifica tu gestión de cobros y pagos. Automatiza tus procesos y haz crecer tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
      >
        <ScrollRevealInitializer />
        {children}
      </body>
    </html>
  );
}
