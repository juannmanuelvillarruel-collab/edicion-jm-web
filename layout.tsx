import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] }); // respaldo de General Sans
const jbMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Juan Manuel Villarruel · Go-to-market, growth y marketing de resultados",
  description: "Estrategia de go-to-market, growth y marketing de resultados para empresas B2B, ecommerce y marcas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${dmSans.variable} ${jbMono.variable} h-full antialiased`}>
      <head>
        {/* General Sans (Fontshare) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
