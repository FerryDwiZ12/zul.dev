/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': [''],
      },
      screens : {
        'mobile' : '414',
      }
    },
  },
  variants: {},
  plugins: [],
}
