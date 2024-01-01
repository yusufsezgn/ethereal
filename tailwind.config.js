/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      colors: {
        'color1': '#222831',
        'color2': '#E8E8E8',
        'color3': '#30475E',
        'color4': '#F05454',
        'color5': '#0ECB81',
        'custom': '#848E9C'
      }
    },
  },
  plugins: [],
}
