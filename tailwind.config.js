/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: [
          "Pacifico",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "card-shadow": "0 7px 32px -11px rgba(0, 0, 0, 0.25)",
      },
      margin: {
        "1/5": "20%",
      },
      height: {
        0.1: "1px",

        // Add more custom heights as needed
      },
      colors: {
        primary: {
          light: "#FFFAF4",
          DEFAULT: "#FFF4EA",
          dark: "#FBECDD",
        },
        seconary: {
          light: "#DEC9B4",
          DEFAULT: "#BDA087",
          dark: "#89603E",
        },
        orange: {
          DEFAULT: "#F29846",
        },
      },
    },
  },
  plugins: [],
};
