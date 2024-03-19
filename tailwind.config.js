/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        2000: "2000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          50: "#E5F8FF",
          100: "#CCF1FF",
          200: "#99E4FF",
          300: "#66D6FF",
          400: "#33C9FF",
          500: "#00B9FF",
          600: "#0096CC",
          700: "#007099",
          800: "#004B66",
          900: "#002533",
          950: "#001319",
        },
        pink: {
          50: "#E8E8FD",
          100: "#D1D0FB",
          200: "#A3A1F7",
          300: "#7573F2",
          400: "#4744EE",
          500: "#1915E9",
          600: "#1411BB",
          700: "#0F0D8C",
          800: "#0A085E",
          900: "#05042F",
          950: "#020217",
        },
        green: {
          50: "#E8FDE9",
          100: "#D0FBD3",
          200: "#A1F7A7",
          300: "#73F27B",
          400: "#44EE4F",
          500: "#15E824",
          600: "#11BB1C",
          700: "#0D8C15",
          800: "#085E0E",
          900: "#042F07",
          950: "#021704",
        },
      },
    },
  },
  plugins: [animations],
};
