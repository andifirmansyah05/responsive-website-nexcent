/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: "#F5F7FA",
        gray: "#717171",
        darkgray: "#4D4D4D",
        primary: "#4CAF4F",
      },
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
