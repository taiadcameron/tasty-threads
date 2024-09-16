/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFFAF4",
          DEFAULT: "#FFF4EA",
          dark: "#FBECDD",
        },
        seconary: {
          light: "#DEC9B4",
          DEFAULT: "#B08968",
          dark: "#89603E",
        },
      },
    },
  },
  plugins: [],
};
