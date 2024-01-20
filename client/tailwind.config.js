/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/public/images/bgimg.jpg')",
        img2: "url('/public/images/bging10.webp')",
      },
    },
  },
  plugins: [],
};
