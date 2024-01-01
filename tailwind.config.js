/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#17181A",
          light: "",
        },
        secondary: "#588157",
        soft: "#f8f9fa",
      },
      fontFamily: {
        display: "Rubik, sans-serif",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
