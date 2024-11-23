/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "var(--primary)", 
        background: "var(--background)", 
      },
      gridTemplateColumns:{
        custom:" 2fr 1.5fr 2.5fr" ,
      },
    },
  },
  plugins: [],
  base:"/personal-portfolio"
}

