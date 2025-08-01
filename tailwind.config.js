/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xs": "320px",
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        fadeOut: "fadeOut 0.2s ease-in-out",
      },
    },
    keyframes:{
      fadeIn: {
        "0%": { 
          opacity: 0,
          transform: 'scale(1) translateX(-50%)',
        },
        "100%": { 
          opacity: 1,
        },
      },
      fadeOut: {
        "0%": { 
          opacity: 1,
        },
        "100%": { 
          opacity: 0,
          transform: 'scale(1) translateX(-50%)',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

