import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brow900: "#2D0402",
        brow500: "#8D3A1D",
        brow200: "#C3803A",
        green500: "#0D6419",
        yellow200: "#FAC757",
      },
      backgroundImage: {
        "hero-pascoa-ouro": "url('/src/assets/bg-ovo-de-pascoa.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
