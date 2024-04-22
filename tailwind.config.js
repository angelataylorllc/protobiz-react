/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(17, 24, 39, 0.9), rgba(76, 29, 149, 0.9)), url('../public/top_squiggly.svg')",
      },
    },
  },
  plugins: [],
}

