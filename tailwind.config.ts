import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0D14", // deep slate/charcoal
        foreground: "#F1F5F9", // off-white
        primary: {
          DEFAULT: "#4F46E5", // subtle indigo accent
          hover: "#4338CA",
        },
        surface: {
          DEFAULT: "#10141D", // slightly lighter than bg
          border: "#1E2536",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
