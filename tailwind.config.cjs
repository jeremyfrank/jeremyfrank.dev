/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,svelte,svg,ts,tsx,vue}'],
  safelist: ['language-id'],
  theme: {
    extend: {
      screens: {
        smd: { max: '539px' },
        mdd: { max: '767px' },
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.zinc.300', 'currentColor'),
      }),
      gridTemplateColumns: {
        inherit: 'inherit',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            a: {
              fontWeight: null,
            },
            h2: {
              fontWeight: null,
            },
            li: {
              marginTop: '0.75em',
              marginBottom: '0.75em',
              lineHeight: 1.5,
            },
            ':not(pre) > code': {
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: '0.15em',
              fontWeight: 'normal',
              padding: '0.1em 0.2em',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            iframe: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14),
            },
          },
        },
        lg: {
          css: {
            h2: {
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            li: {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            iframe: {
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },
        xl: {
          css: {
            h2: {
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            li: {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-hr': colors.zinc[500],
          },
        },
        zinc: {
          css: {
            '--tw-prose-hr': colors.zinc[300],
          },
        },
      },
    },
    fontFamily: {
      sans: ['"Calluna Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      serif: ['Calluna', 'ui-serif', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
