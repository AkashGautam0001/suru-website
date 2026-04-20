/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#e5f4fa",
        green: {
          DEFAULT: "#00c57e",
          light: "#44d557",
        },
        pink: {
          DEFAULT: "#ec74e8",
        },
        yellow: "#ffc858",
        blue: {
          DEFAULT: "#6198ff",
        },
        dark: "#2b2b2b",
        lightBlue: "#f1fbff",
        textDark: "#353638",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
