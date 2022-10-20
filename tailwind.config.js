/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile": "url('/src/images/bg-mobile.svg' )  ",
        "bg-Desk": "url('/src/images/bg-desktop.svg' )  ",
      },
    },
    colors: {
      Violet: "hsl(257, 40%, 49%)",
      SoftMagenta: "hsl(300, 69%, 71%)",
    },
    fontFamily: {
      open: ["Open Sans"],
      popins: ["Poppins"],
    },
  },
  plugins: [],
};
