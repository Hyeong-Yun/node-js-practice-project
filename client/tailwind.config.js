module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1240: "1240px",
        450: "450px",
        600: "600px",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
