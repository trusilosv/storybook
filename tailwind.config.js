/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/stories/*.{html,js,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Open Sans"', "sans - serif"],
    },
    extend: {
      transitionProperty: {
        1: "all",
      },
      transitionDuration: {
        1: "700ms",
      },
      width: {
        65: "65%",
        90: "90%",
      },
      boxShadow: {
        1: "inset 20px 0 0 0 rgba(255, 230, 0, 0.6), inset 0 20px 0 0 rgba(255, 0, 221, 0.6), inset -20px 0 0 0 rgba(255, 230, 0, 0.6), inset 0 -20px 0 0 rgba(0, 247, 255, 0.6)",
        2: " inset 20px 0 0 0 rgba(255, 0, 0, 0.6), inset 0 20px 0 0 rgba(0, 4, 255, 0.6), inset -20px 0 0 0 rgba(0, 247, 255, 0.6), inset 0 -20px 0 0 rgba(255, 80, 0, 0.6)",
      },
      animation: {
        rotateAfter: "rotateAfter 3s -0.5s linear infinite",
        rotateBefore: "rotateBefore 3s -0.5s linear infinite",
      },
      keyframes: {
        rotateAfter: {
          "0%": { transform: "rotateZ(0deg) scaleX(1) scaleY(1)" },
          "50%": { transform: "rotateZ(180deg) scaleX(0.85) scaleY(0.95)" },
          "100%": { transform: "rotateZ(360deg) scaleX(1) scaleY(1)" },
        },
        rotateBefore: {
          "0%": { transform: "rotateZ(0deg) scaleX(1) scaleY(1)" },
          "50%": { transform: "rotateZ(-180deg) scaleX(0.95) scaleY(0.85)" },
          "100%": { transform: "rotateZ(-360deg) scaleX(1) scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
