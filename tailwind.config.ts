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
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        energy: "var(--energy)",
      },
      boxShadow: {
        card: "0 20px 45px -30px rgba(31, 41, 55, 0.55)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
