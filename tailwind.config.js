/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //fontFamily: {
       // sans: ['Poppins', 'sans-serif'], //body
      //  serif: ['Oswald', 'serif'], // header
      //},
      colors: {
        primary: {
          50:  'rgb(252, 239, 237)',   // rose foam
  100: 'rgb(248, 217, 213)',   // soft clay
  200: 'rgb(241, 186, 180)',   // light paprika
  300: 'rgb(233, 150, 140)',   // warm blush
  400: 'rgb(222, 110, 100)',   // spiced coral
  500: 'rgb(211, 78, 56)',     // tomato brick (base: #d34e38)
  600: 'rgb(184, 63, 45)',     // fire clay
  700: 'rgb(150, 50, 38)',     // smoked paprika
  800: 'rgb(120, 40, 32)',     // rustic chili
  900: 'rgb(90, 30, 26)',      // ember brown
  950: 'rgb(60, 20, 18)'       // toasted earth
        },
        secondary: {
            50:  'rgb(255, 248, 245)',   // airy blush
            100: 'rgb(255, 235, 230)',   // soft apricot wash
            200: 'rgb(255, 216, 205)',   // light peach
            300: 'rgb(255, 189, 173)',   // pastel coral
            400: 'rgb(255, 157, 138)',   // bright warm peach
            500: 'rgb(255, 127, 105)',   // fresh coral
            600: 'rgb(241, 101, 83)',    // bold coral
            700: 'rgb(220, 80, 67)',     // rich vermilion
            800: 'rgb(195, 65, 55)',     // warm clay red
            900: 'rgb(160, 45, 40)',     // deep rust
            950: 'rgb(120, 30, 28)'      // earthy red-brown
        },
        accent: {
          50: 'rgb(255,247,237)',
          100: 'rgb(255,237,213)',
          200: 'rgb(254,215,170)',
          300: 'rgb(253,186,116)',
          400: 'rgb(251,146,60)',
          500: 'rgb(249,115,22)',
          600: 'rgb(234,88,12)',
          700: 'rgb(194,65,12)',
          800: 'rgb(154,52,18)',
          900: 'rgb(124,45,18)',
          950: 'rgb(67,20,7)'
        },
        neutral: {
          50: 'rgb(250,250,250)',
          100: 'rgb(244,244,245)',
          200: 'rgb(228,228,231)',
          300: 'rgb(212,212,216)',
          400: 'rgb(161,161,170)',
          500: 'rgb(113,113,122)',
          600: 'rgb(82,82,91)',
          700: 'rgb(63,63,70)',
          800: 'rgb(39,39,42)',
          900: 'rgb(24,24,27)',
          950: 'rgb(9,9,11)'
        },
        success: {
          500: 'rgb(34,197,94)',
          600: 'rgb(22,163,74)'
        },
        warning: {
          500: 'rgb(245,158,11)',
          600: 'rgb(217,119,6)'
        },
        error: {
          500: 'rgb(239,68,68)',
          600: 'rgb(220,38,38)'
        }
    },
  },
  plugins: [],
}
};
