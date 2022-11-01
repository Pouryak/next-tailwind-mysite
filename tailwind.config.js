module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      gridTemplateColumns: {
        4: "repeat(2, minmax(0, 1fr))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        opensans: ["M PLUS Rounded 1c", "sans-serif"],
      },
      colors: {
        glassLight: "#ffffff40",
        glassDark: "rgba(32, 32, 35, 0.5)",
        bgPrimaryLight: "#f1f3f5",
        bgPrimaryDark: "rgb(32, 32, 35)",
        bgSecondaryLight: "rgba(255, 255, 255, 0.36)",
        bgSecondaryDark: "rgba(225, 225, 225, 0.08)",
        textDark: "#1a202c",
        textLight: "rgb(255, 255, 255, 0.92)",
        greenAccent: "#96f2d7",
        purpleAccent: "rgb(255, 99, 195)",
        hoverLight: "rgba(154, 230, 180, 0.16)",
        hoverDark: "rgba(35, 107, 83, 0.240)",
      },

      spacing: {
        20: "6rem",
        30: "8rem",
        132: "38rem",
      },
    },
  },
  plugins: [],
};
