import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          light: "#ebfdf2",
          DEFAULT: "#37ed80",
          dark: "#218e4c"
        },
        secondary: "#8D818C",
        white: "#ffffff",
        neutral: "#191919"
      },
      padding:{
        'page' : '10rem'
      }
    },
  },
  plugins: [],
};
export default config;
