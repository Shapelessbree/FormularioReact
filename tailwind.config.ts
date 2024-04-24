import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        // Blue
        "dark-blue": "#0A2F5B",
        "medium-blue": "#3478D7",
        "pale-blue": "#D5E3F7",
        "light-blue": "#8EBDFF",

        // Green
        "light-green": "#CFFFF1",
        "main-green": "#5EE8C1",

        // Purple
        "dark-purple": "#5954D2",

        // Red
        "light-red": "#FF845D",
        "dark-red": "#ED0022",

        //Gray
        "dark-gray": "#B3B7B8",

        //Yellow
        yellow: "#FCCD00",
  
        //Pink
        pink: "#ED88A6",
      },

      boxShadow: {
        shadowGeneral: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
   
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1800px",

        "4xl": "1920px",
      },
    },
  },
  plugins: [],

};
export default config;