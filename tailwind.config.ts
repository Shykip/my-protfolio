import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0C",
        secondary: "#FFFFFF",
        highlight: "#FFA800",
        dim: "#848484"
      },
      fontFamily: {
        "inter": ["var(--font-inter)"],
        "rivage": ["var(--font-rivage)"]
      },
      animation: {
        'dropdown': 'dropdown 0.5s ease-out',
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
