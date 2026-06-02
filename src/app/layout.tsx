import type { Metadata } from "next";
import { Bebas_Neue, Special_Elite } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special',
});

export const metadata: Metadata = {
  title: "Nguyen Khanh Tung | Data & Business Analytics",
  description: "Portfolio of Nguyen Khanh Tung - Data & Business Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${bebas.variable} ${specialElite.variable}`}>
      <body className="antialiased bg-rdr-bg text-rdr-text min-h-screen overflow-hidden selection:bg-rdr-red selection:text-white font-special">
        <div className="noise-overlay pointer-events-none" aria-hidden="true" />
        <div className="vignette-overlay pointer-events-none" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
