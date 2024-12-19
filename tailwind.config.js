/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonBg: "#E89500",
        heroCta: "#B29E6D",
        brownColor: "#DB9E30",
        cardBg: "#FFF5D7",
        gradOne: "#09644E",
        gradTwo: "#0B775C",
        gradThree: "#08513F",
        textGradOne: "#C38B10",
        textGradTwo: "#D6BD04",
        textGradThree: "#BF7307",
        inputBg: "#D9D9D9",
        footerBg: "#2B2B2B",
        menuText: "#dcdcdc",
        pricingCompBg: "#F3F3F3",
        contactDetailsBg: "#EAEAEA",
        courseMatter: "#F4F4F4",
        aboutBg: "#F8F8F8"
      },
      height: {
        custom: "calc(100vh - 180px)",
      },
    },
  },
  plugins: [],
};
