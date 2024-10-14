/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#2c314e",
        primary: "#030923",
        tertiary: "#292e44",
      },
    },
  },
  plugins: [],
}
