/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF", // modern purple accent
        secondary: "#4CAF50", // soft green
        dark: "#1E1E1E",
        light: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      boxShadow: {
        neumorphic: "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff",
        "neumorphic-inset": "inset 10px 10px 20px #d1d9e6, inset -10px -10px 20px #ffffff",
      },
    },
  },
  plugins: [],
}
