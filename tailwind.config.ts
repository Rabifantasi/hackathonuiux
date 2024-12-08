import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js 13+ App Router
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom CSS variable
        foreground: "var(--foreground)", // Custom CSS variable
      },
    },
  },
  plugins: [], // You can add Tailwind plugins here
};

export default config;