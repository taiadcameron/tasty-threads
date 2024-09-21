/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
          DEFAULT: "#B08968",
          dark: "#89603E",
        },
      },
    },
  },
  plugins: [],
};
