/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "link-green": "#c5f82a",
        "link-white": "#ffffff",
        "link-grey-100": "#333333",
        "link-grey-200": "#1f1f1f",
        "link-grey-300": "#141414",
      },
    },
  },
  plugins: [],
};
