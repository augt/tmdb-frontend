import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "var(--dark-background)",
        lightBackground: "var(--light-background)",
        greyBackground: "var(--grey-background)",
        lightTextColor: "var(--light-text-color)",
        darkTextColor: "var(--dark-text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
