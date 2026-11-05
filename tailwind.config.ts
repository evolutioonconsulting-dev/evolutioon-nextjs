import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#16281F",
          light: "#22392B",
          dark: "#0F1D17"
        },
        cream: {
          DEFAULT: "#F5EDD6",
          light: "#f7f5ef",
          dark: "#EDE2C8"
        },
        gold: {
          DEFAULT: "#B08D4C",
          light: "#C9A968",
          dark: "#8E7239"
        },
        ink: "#16281F"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "forest-gradient":
          "linear-gradient(135deg, #0F1D17 0%, #16281F 45%, #22392B 100%)"
      },
      letterSpacing: {
        widest2: "0.25em"
      }
    }
  },
  plugins: []
};

export default config;
