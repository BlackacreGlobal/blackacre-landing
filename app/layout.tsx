import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const awakening = localFont({
  src: "./fonts/AWAKENNING.ttf",
  display: "swap",
  variable: "--font-awakening",
});

export const metadata: Metadata = {
  title: "BlackAcre",
  description: "BlackAcre Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${awakening.variable}`}>
        {children}
      </body>
    </html>
  );
}
