/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Fira Sans', 'sans-serif'],
      },
    },
    colors: {
      raisin: '#23232F',
      moonstone: '#74B1BE',
      raisin_dark: '#20202D',
      alice: '#E3EDF7',
      carmine: '#902424',
    },
    backgroundImage: {
      wavy: 'url(wavy-lines.svg)',
      logo: 'url(logo.svg)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
