module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#151515',
      'white': '#FFFFFF',
      'gold': '#D5966C',
      'gray': '#444444'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontSize: {
      sm: ['18px', { lineHeight: '28px' }],
      base: ['22px', { lineHeight: '32px' }],
      lg: ['36px', { lineHeight: '36px' }],
      xl: ['60px', { lineHeight: '55px' }],
      '2xl': ['70px', { lineHeight: '70px' }],
      '3xl': ['96px', { lineHeight: '88px' }]
    },
    fontFamily: {
      shoulders: ['"Big Shoulders Display"', 'cursive'],
      outfit: ['Outfit', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
