/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ccff00",
          dim: "#c2f800",
        },
        bg: {
          DEFAULT: "#0c0d10",
          surface: "#0f1115",
          card: "#13161d",
          card2: "#15171d",
          soft: "#1a1d24",
        },
        line: {
          DEFAULT: "#232732",
          soft: "#20242e",
          faint: "#1b1f28",
        },
        muted: "#9ca3af",
        slate: {
          750: "#1f2937",
        },
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
