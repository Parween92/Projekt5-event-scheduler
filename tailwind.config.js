/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideOut: 'slideOut 0.8s ease-out forwards', // Definition der Animation
      },
      keyframes: {
        slideOut: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100vw)', // Verschiebe nach rechts
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
