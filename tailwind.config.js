/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
      },
    },
    extend: {
      animation: {
        "move-y": "move-y 7s ease-in-out infinite",
        "wave-1": "wave-1 7s linear infinite",
        "wave-2":
          "wave-1 7s linear -0.125s infinite, wave-2 7s ease -0.125s infinite",
        loader: "loader 1.3s infinite ease-in-out",
        zoom: "zoom 300ms ease-in",
      },
      backgroundImage: {
        wave: "url('/img/wave.svg')",
        "wave-2": "url('/img/wave2.svg')",
      },
      colors: {
        primary: {
          50: "#f0faff",
          100: "#e0f5fe",
          200: "#bae8fd",
          300: "#7dd5fc",
          400: "#38bcf8",
          500: "#0ea5e9",
          600: "#028ac7",
          700: "#0370a1",
          800: "#075e85",
          900: "#0c506e",
          950: "#083549",
          187: "#e3e3e3",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "move-y": {
          "0%, 100%": { transform: "translateY(10px)" },
          "25%": { transform: "translateY(-10px)" },
        },
        "wave-1": {
          "0%": { "margin-left": "0" },
          "100%": { "margin-left": "-1600px" },
        },
        "wave-2": {
          "0%, 100%": { transform: "translateY(-25px)" },
          "50%": { transform: "translateY(10px)" },
        },
        loader: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(120%)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.07)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
