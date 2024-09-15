/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        gray: {
          def: "var(--color-gray-def)",
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
      },
      keyframes: {
        "swanging-right": {
          "0%": { transform: "translateX(10px)  translateY(10px)" },
          "50%": { transform: "translateX(0px)  translateY(0px)" },
          "100%": { transform: "translateX(10px)  translateY(10px)" },
        },
        "swanging-left": {
          "0%": { transform: "translateX(-13px)  translateY(13px)" },
          "50%": { transform: "translateX(0px)  translateY(0px)" },
          "100%": { transform: "translateX(-13px)  translateY(13px)" },
        },
        "swanging-left": {
          "0%": { transform: "translateX(-13px)  translateY(13px)" },
          "50%": { transform: "translateX(0px)  translateY(0px)" },
          "100%": { transform: "translateX(-13px)  translateY(13px)" },
        },
        wave: {
          "0%,50%,100%": { transform: "rotate(0deg)" },
          "25%,75%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        "swanging-right": "swanging-right 5s ease-in-out infinite",
        "swanging-left": "swanging-left 5s ease-in-out infinite",
        wave: "wave 1.3s ease-in-out",
        "reveal-text": "reveal-text 1s ease forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".center-between": {
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".center": {
          "justify-content": "center",
          "align-items": "center",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
