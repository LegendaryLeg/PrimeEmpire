/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#1F3D2B',
        },
        secondary: {
          brown: '#5A3E2B',
        },
        background: {
          beige: '#F5F1EA',
        },
        accent: {
          saffron: '#C89B3C',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B6B6B',
        },
        border: {
          divider: '#E3DED6',
        },
      },
    },
  },
  plugins: [],
}
