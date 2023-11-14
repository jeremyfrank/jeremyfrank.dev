/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px) => `${round(px / 16)}em`

module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,svelte,svg,ts,tsx,vue}'],
  safelist: ['language-id'],
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.zinc.300', 'currentColor'),
      }),
      gridTemplateColumns: {
        inherit: 'inherit',
      },
    },
    fontFamily: {
      sans: ['"Calluna Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      serif: ['Calluna', 'ui-serif', 'serif'],
    },
    screens: {
      '<sm': { max: em(639) },
      sm: em(640),
      '<md': { max: em(767) },
      md: em(768),
      lg: em(1024),
      xl: em(1280),
    },
  },
}
