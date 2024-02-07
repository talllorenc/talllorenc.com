module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'in': '600px',
      'md': '960px',
      'lg': '1315px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        source: ['Source Code Pro']
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px white',
      }
    },
  },
  plugins: [],
}