/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGray: "#282828",
      "primary-color": "#e6e6e6",
      white: "#ffffff",
      mediumGray: "#545454",
      lightBlue: "#00c9ec",
      blue: "#0f54f0",
      darkBlue: "#000036",
      purple: "#e00d96",
      error: "#E3502F",
      success: "#19C486",
      warning: "#BB8711",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 5s linear forwards",
        wiggle: "wiggle 3s ease-in-out infinite",
        "move-right": "moveRight 1s ease-in-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        moveRight: {
          "0%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    "flowbite/plugin",
  ],
  darkMode: "class",
  // lightMode: "class",
};
