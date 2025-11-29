import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Colores personalizados Arcade Cuba
        arcade: {
          black: "#0f0f0f",      // Fondo principal
          glass: "rgba(15, 15, 15, 0.8)", // Para efecto blur
          neonBlue: "#00ffff",   // Acentos primarios
          neonPurple: "#ae00ff", // Acentos secundarios
          lime: "#ccff00",       // Ofertas
          darkGray: "#1a1a1a",   // Fondos secundarios
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"], // Títulos
        manrope: ["var(--font-manrope)"],   // Texto
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow": {
          from: { boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff" },
          to: { boxShadow: "0 0 20px #ae00ff, 0 0 30px #ae00ff" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config