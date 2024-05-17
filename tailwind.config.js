/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hsl-229-31-21': 'hsl(229, 31%, 21%)',
      },
    },
  },
  plugins: [],
}

