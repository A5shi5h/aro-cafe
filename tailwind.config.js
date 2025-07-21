/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0f2fe', // light blue
          DEFAULT: '#2563eb', // main blue
        },
        background: '#ffffff',
        accent: '#f1f5f9', // subtle gray for backgrounds
      },
    },
  },
  plugins: [],
}

