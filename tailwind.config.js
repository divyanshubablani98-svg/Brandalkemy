/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#161615',
        'onyx-dark': '#0f0f0e',
        'onyx-light': '#212120',
        'onyx-card': '#1c1c1b',
        'onyx-border': '#2d2d2a',
        amber: '#FCCF07',
        'amber-hover': '#e5b800',
        'amber-light': '#fef08a',
        amethyst: '#4F0F5D',
        'amethyst-dark': '#380943',
        'amethyst-light': '#731c86',
        'amethyst-glow': '#9d2eb6',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'alchemy-gradient': 'linear-gradient(135deg, #4F0F5D 0%, #161615 100%)',
        'alchemy-radial': 'radial-gradient(circle at center, rgba(79, 15, 93, 0.35) 0%, rgba(22, 22, 21, 0.95) 70%)',
      },
      boxShadow: {
        'amber-glow': '0 0 25px -5px rgba(252, 207, 7, 0.35)',
        'amethyst-glow': '0 0 35px -5px rgba(79, 15, 93, 0.45)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(79, 15, 93, 0.3)',
      },
    },
  },
  plugins: [],
}
