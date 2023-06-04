/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#BCCC5D",
        secondary: "#707F4E",
        accent: "#313922",
        tertiary: "#F5A526",
      },
      fontFamily: {
        primary: ["Bulletproof", "sans-serifx"],
        secondary: ["Stencil", "sans-serifx"],
      },
    },
  },
  plugins: [],
};
