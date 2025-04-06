/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        primary: {
          DEFAULT: "#a855f7", // Purple-500
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ec4899", // Pink-500
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    "text-blue-500",
    "text-pink-500",
    "text-purple-500",
    "text-green-500",
    "text-yellow-500",
    "text-orange-500",
    "text-indigo-500",
    "border-blue-500",
    "border-pink-500",
    "border-purple-500",
    "border-green-500",
    "border-yellow-500",
    "border-orange-500",
    "border-indigo-500",
    "bg-blue-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-indigo-500",
    "hover:bg-blue-500/10",
    "hover:bg-pink-500/10",
    "hover:bg-purple-500/10",
    "hover:bg-green-500/10",
    "hover:bg-yellow-500/10",
    "hover:bg-orange-500/10",
    "hover:bg-indigo-500/10",
    "hover:text-blue-500",
    "hover:text-pink-500",
    "hover:text-purple-500",
    "hover:text-green-500",
    "hover:text-yellow-500",
    "hover:text-orange-500",
    "hover:text-indigo-500",
  ],
  plugins: [require("tailwindcss-animate")],
}

