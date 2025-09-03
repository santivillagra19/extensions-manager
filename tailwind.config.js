/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",        // tu HTML principal
    "./src/**/*.{js,ts,jsx,tsx}"  // todos los archivos JS/TS/JSX/TSX dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
