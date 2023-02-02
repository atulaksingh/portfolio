/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  theme: {
    screens: {
      tab: "640px",
      // => @media (min-width: 640px) { ... }

      lap: "1024px",
      // => @media (min-width: 1024px) { ... }

      desk: "1280px",
      // => @media (min-width: 1024px) { ... }

      // 'extra': '1536px',
    },
  },
  plugins: [],
};
