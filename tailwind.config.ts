import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        dark: "var(--surface-dark)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        energy: "var(--energy)",
      },
      boxShadow: {
        card: "0 20px 45px -30px rgba(0,0,0,0.4)",
        "card-dark": "0 20px 45px -20px rgba(0,0,0,0.8)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
