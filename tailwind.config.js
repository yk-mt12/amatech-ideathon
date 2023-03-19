/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // --------------------------------------------------
      // custom settings
      // --------------------------------------------------

      sp: '428px', // スマホサイズを追加
      maxsp: { max: '427px' }, // maxも追加
      sptb: { min: '428px', max: '559px' }, // min-maxを追加

      tb: '600px', // タブレットサイズを追加
      maxtb: { max: '599px' },
      tbpc: { min: '600px', max: '1023px' },

      maxpc: { max: '1023px' },
      pc: '1024px',

      // --------------------------------------------------
      // tailwind default
      // --------------------------------------------------
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
  },
  plugins: [],
}
