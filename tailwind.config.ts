import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/4' : '6 / 10',
        '4/5' : '9 /10',
        'card' : '25 / 32'
      },
      colors : {
        'point' : '#2CC597'
      }
    },
  },
  plugins: [],
};
export default config;
