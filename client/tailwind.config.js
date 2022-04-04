module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1230: "1230px",
        450: "450px",
      },
      backgroundImage: {
        "header-img": "url(img/header-img)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
