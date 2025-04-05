import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          DEFAULT: "1440px",
        },
        center: true,
        padding: "1.2rem",
      },
     screens:{
      xs:"450px"
     },
     fontFamily: {

      poppins: ['var(--font-poppins)', 'sans-serif'],
      sofia: ['var(--font-sofia-sans)', 'sans-serif'],
    },
    },
  },
  plugins: [],
} satisfies Config;
