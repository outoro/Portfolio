import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard Variable", "serif"],
        Poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tablet: "767px",
        desktop: "1280px",
      },
      boxShadow: {
        shadow: "0 0 0 1px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
