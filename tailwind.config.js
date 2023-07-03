/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      // Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
      "dark-blue-0": "hsl(209, 23%, 22%)",
      // Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
      "dark-blue-1": "hsl(207, 26%, 17%)",
      // Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
      "dark-blue-2": "hsl(200, 15%, 8%)",
      // Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
      "dark-gray": "hsl(0, 0%, 52%)",
      // Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
      "light-gray": "hsl(0, 0%, 98%)",
      // white: dark mode text & light mode elements
      white: "hsl(0, 0%, 100)",
    },
  },
  plugins: [],
};
