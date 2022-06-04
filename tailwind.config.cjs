module.exports = {
  content: ['./src/**/*.{astro,html,md,js,jsx,svelte,svg,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        smd: {'max': '539px'},
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              fontWeight: null,
            },
            h2: {
              fontWeight: null,
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
          },
        },
        xl: {
          css: {
            h2: {
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
          },
        },
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
