import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura, Quicksand, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoChain",
  description: "Painel interativo para análise dos valores de criptomoedas em tempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", geistMono.variable, geistSans.variable, jura.variable, quicksand.variable, montserrat.variable)}
      >
        {children}
      </body>
    </html>
  );
}
