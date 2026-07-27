/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // purple: "#a855f7",
        // "dark-100": "#1a1a1a",
        // "dark-300": "#121212",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
