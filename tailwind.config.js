/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        description: "description 1.5s ease-in",
      },
      keyframes: {
        description: {
          '0%' : {right:'-100%',opacity: 0},
          '50%' : {opacity: 0},
          '100%' : {right:0,opacity: 1},
        }
      }
    },
  },
  plugins: [],
}
