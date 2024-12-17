/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-white': '#F3F3F3',
        'page-bg': '#F3F3F3',
        'highlight': '#2185D5',
        'text-primary': '#303841',
        'text-secondary': '#3A4750',
      },
    },
  },
  plugins: [],
};

export default config; 