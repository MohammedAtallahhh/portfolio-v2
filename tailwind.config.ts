import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
      colors: {
        primary: colors.green[700],
        separator: colors.gray[400],
        skeleton: colors.slate[200],
        imgborder: colors.gray[400],
      },
      fontFamily: {
        heading: ["var(--font-made-dillan)"],
        subheading: ["var(--font-space-text)"],
      },
    },
  },
};
export default config;
