/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["roboto"]
      },
      colors: {
        primary: {
          DEFAULT: "#4F73D0",
          dark: "#224DBA"
        }
      }
    }
  },
  plugins: []
};
