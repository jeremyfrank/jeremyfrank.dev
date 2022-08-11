/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,svelte,svg,ts,tsx,vue}'],
  safelist: ['language-id'],
  theme: {
    extend: {
      screens: {
        smd: {'max': '539px'},
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.zinc.300', 'currentColor'),
      }),
      typography: {
        DEFAULT: {
          css: {
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
          }
        },
        zinc: {
          css: {
            '--tw-prose-hr': colors.zinc[300],
          }
        }
      },
    },
    fontFamily: {
      sans: ['"Calluna Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      serif: ['Calluna', 'ui-serif', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
