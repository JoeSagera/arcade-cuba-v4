import type { Metadata } from "next";
import { Orbitron, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Cargar fuentes
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arcade Cuba | El futuro del gaming",
  description: "La primera plataforma de gaming a gran escala en Cuba. PC Gaming, PS5, VR y E-Sports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn(
        "min-h-screen bg-arcade-black font-manrope antialiased",
        orbitron.variable,
        manrope.variable
      )}>
        <Navbar />
        <main className="pt-20"> 
          {/* pt-20 para compensar el navbar fijo */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}