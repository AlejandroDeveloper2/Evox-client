/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
      "2xl": "1536px",
    },
    colors: {
      darkGray: "#1a1a1a",
      "primary-color": "#e4e7ea",
      white: "#ffffff",
      mediumGray: "#6c757d",
      lightGray: "#eff1f3",
      gray: "#c9cfd5",
      disabledColor: "#c9cfd5",
      lightBlue: "#00c7EC",
      blue: "#0F54EB",
      mediumBlue: "#7D61E1",
      darkBlue: "#000036",
      purple: "#E80287",
      error: "#E3502F",
      success: "#19C486",
      warning: "#BB8711",
      black: "#000000",
      violet: "#9f4aed",
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
