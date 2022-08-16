/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/forms'), 
    require('@tailwindcss/line-clamp'), 
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
};
