module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,svg,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        smd: {'max': '539px'},
      },
    },
    fontFamily: {
      sans: ['"Calluna Sans"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      serif: ['Calluna', 'ui-serif', 'serif'],
    },
  },
  plugins: [],
}
