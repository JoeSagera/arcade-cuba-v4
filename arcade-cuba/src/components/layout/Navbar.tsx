"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Asegúrate de tener el botón de shadcn o usa html button por ahora

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Sala Kohly", href: "/sala-kohly" },
  { name: "VIP", href: "/vip" },
  { name: "Ofertas", href: "/ofertas" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-arcade-glass backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Gamepad2 className="h-8 w-8 text-arcade-neonBlue group-hover:text-arcade-neonPurple transition-colors duration-300" />
          <span className="text-2xl font-orbitron font-bold tracking-wider text-white">
            ARCADE<span className="text-arcade-neonBlue">.CU</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-arcade-neonBlue transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth / CTA Button (Desktop) */}
        <div className="hidden md:block">
           {/* Aquí irá el componente de Clerk más adelante */}
           <button className="px-6 py-2 bg-transparent border border-arcade-neonPurple text-arcade-neonPurple hover:bg-arcade-neonPurple hover:text-white transition-all duration-300 rounded font-orbitron text-sm uppercase tracking-wider shadow-[0_0_10px_rgba(174,0,255,0.2)] hover:shadow-[0_0_20px_rgba(174,0,255,0.6)]">
             Login / Join
           </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-arcade-black border-t border-white/10 absolute w-full">
          <div className="container px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-arcade-neonBlue"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <button className="w-full py-3 mt-2 bg-arcade-neonPurple text-white font-bold rounded">
               LOGIN / REGISTRO
             </button>
          </div>
        </div>
      )}
    </header>
  );
}