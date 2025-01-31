import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      chakra: ['"Chakra Petch"', "sans-serif"],
      plex: ['"IBM Plex Mono"', "monospace"],
      sans: '"IBM PLex Sans", "monospace"',
    },
  },
  plugins: [],
} satisfies Config;
