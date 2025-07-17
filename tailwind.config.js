module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
     
    },
    extend: {},
  },
   variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
};
