/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mint-green": "#cffcff",
        "spring-green": "#0cf574",
        "india-green": "#358600",
        "rich-black": "#0d1321",
      },
      fontFamily: {
        playwrite: ['"Playwrite VN"', "sans-serif"], // Fonte Playwrite VN
        publicSans: ['"Public Sans"', "sans-serif"], // Fonte Public Sans
        chakraPetch: ['"Chakra Petch"', "sans-serif"], // Fonte Chakra Petch
        deliusSwashCaps: ['"Delius Swash Caps"', "cursive"], // Fonte Delius Swash Caps
      },
    },
  },
  plugins: [],
};
