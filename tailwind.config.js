/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        "imageProfil": "image 1s ease 1",
        "textProfil": "text 1s ease 1",
        "body": "body 1s ease 1",
        "nav": "navBar 1s ease 1",
      },
      keyframes: {
        image: {
          "0%": { transform: 'translateX(-100%)', opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        text: {
          "0%": { transform: 'translateX(100%)', opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        body: {
          "0%": { transform: 'translateY(100%)', opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        navBar: {
          "0%": { transform: 'translateY(-100%)', opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slide: {
          "0%": { transform: 'translateX(-100%)' },
          "100%": { transform: 'translateX(0)' }
        }
      },
      backgroundImage: {
        'background': "url('./src/assets/background.jpg')",
      },
      screens: {
        'xs': '400px',
        'xxs': '200px',
        "d": { 'max': '640px' }
      },
      colors: {
        'myColorStart': '#00f428',
        'myColorEnd': '#004e92',
      }
    },
  },
  plugins: [],
}

