/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primary': '#3B71CA',
        'secondary': '#9FA6B2',
        'tertiary': '#F9FAFB',
        'body': '#1F2937',
    'body-bg': '#FFFFFF',
    'h1': '#1F2937',
    'h2': '#1F2937',
    'h3': '#1F2937',
    'h4': '#1F2937',
    'success': '#14A44D',
    'warning': '#E4A11B',
    'error': '#DC4C64'
      },
      fontFamily: {
        'bodytext': ['Open Sans'],
        'Roboto': ['Roboto'],
        'montserrat': ['Montserrat'],
      },
      fontSize: {
        'clamp': 'clamp(2.5rem,2rem + 3vw, 4.5rem)',
        'mdcm': 'clamp(40px, 3vw, 56px)',
        'mdcm1': 'clamp(8px, 10vw, 16px)',
        'hero3': 'clamp(40px, 5vw + 1rem, 72px)',
        'h-3': 'clamp(40px, 5vw, 50px)',
      },
      fontWeight: {
        'bold': '700',
        'medium': '500',
        'w4': '400',
      },
      padding:{
        'padding': 'clamp(20px, 5vw, 90px)',
        'padding-2':'clamp(20px, 5vw, 49px)'
      },
      lineHeight:{
        'responsive': 'clamp(3rem, 2.5rem + 2vw, 5.3125rem)',
      }
    },
  },
  plugins: [],
}

