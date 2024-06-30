import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '4xs': '320px',
      // => @media (min-width: 490px) { ... }
      '3xs': '450px',
      // => @media (min-width: 490px) { ... }
     
      '2xs': '640px',
      // => @media (min-width: 490px) { ... }

      'xs': '780px',
      // => @media (min-width: 490px) { ... }
      'sm': '880px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      dash: '-_',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
   
    }, 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [],
};
export default config;
