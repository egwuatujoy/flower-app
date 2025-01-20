/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your file structure
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "rgba(34, 44, 29, .9)",
      },
    },
  },
  plugins: [],
};
