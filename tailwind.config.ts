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
      screens: {
        lxl: "1375px",
        mmmmmxl: "1040px",
        mmmxl: "1070px",
        mmxl: "1120px",
        mxl: "1150px",
        smd: "769px",
        xs: "475px",
      },
    },
    fontFamily: {
      chakra: ['"Chakra Petch"', "sans-serif"],
      plex: ['"IBM Plex Mono"', "monospace"],
      sans: ['"IBM PLex Sans", "monospace"'],
      druk: ['"Druk Cyr", "sans-serif"'],
    },
  },
  plugins: [],
} satisfies Config;
