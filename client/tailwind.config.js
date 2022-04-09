module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1240: "1240px",
        450: "450px",
        600: "600px",
        180: "180px",
        200: "200px",
        550: "550px",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
