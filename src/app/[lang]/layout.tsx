import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Bernardo Group",
  description: "Bernardo Group é a holding que administra as empresas Bernardo Concept, Bernardo Construtora e TechnoGlass de Vidros.",
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  return (
    <html lang={params.lang} className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">

      <body>{props.children}</body>
    </html>
  );
}
