module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#191919",
      secondary: "#F3F3F3",
      gdYellow: "#F3DD30",
      gdRed: "#DF314D",
      gdIndigo: "#6F6FB2",
      gdBlue: "#57A9C2",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ],
        mono: ["Inconsolata", "sans-serif"],
        logo: ["Inconsolata"],
      },
    },
  },

  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },

  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
