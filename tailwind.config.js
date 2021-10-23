module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './blog/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
