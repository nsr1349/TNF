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
        'sans': ['S-CoreDream-3Light', 'sans-serif'],
      },
      aspectRatio: {
        '3/4' : '6 / 10',
        '4/5' : '9 /10',
        'card' : '25 / 32'
      },
      colors : {
        'main' : '#18181B',
        'sub' : '#27272A',
        'gray' : '#71717A',
        'purewhite' : '#F4F4F5',
        'point' : '#46CDAC',
        'subhover' : '#3F3F46',
        'warning' : '#B91C1C',
      },
      borderWidth: {
        '1': '1px'
      },
      screens: {
        sm: { max: "819px" },
      },
    },
  },
  plugins: [],
};
export default config;
