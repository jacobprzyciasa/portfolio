import type { Metadata } from "next";
import { Anton, Archivo, EB_Garamond, IBM_Plex_Mono, League_Spartan, Volkhov } from "next/font/google";
import { Toaster } from "@/Components/ui/sonner"
import "./globals.css";

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

const league_spartan = League_Spartan({
  weight: ["300", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-volkhov",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans-portfolio",
});

export const metadata: Metadata = {
  title: "JAKUB PRZYCIASA",
  description: "Hi, I'm Jakub. Come and check out my work!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${league_spartan.variable} ${volkhov.variable} ${anton.variable} ${ibmPlexMono.variable} ${archivo.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
