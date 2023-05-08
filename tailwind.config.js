/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      neue: ['Neue Haas Grotesk Text', 'sans-serif', 'Helvetica', 'Arial'],
    },
    extend: {
      backgroundImage: {
        'home-bg': 'url(./assets/home-bg.jpeg)',
      },
      colors: {
        primary: '#5f94ff',
        background: '#f0f5ff',
        secondary: '#616787',
        lightGreen: '#e5f7f3',
        darkGreen: '#1bcb76',
      },
    },
  },
  plugins: [],
}

