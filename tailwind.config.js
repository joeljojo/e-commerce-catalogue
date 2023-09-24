/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: "#0074E4", // Royal Blue
        secondary: "#F16820", // Orange
        accent1: "#64C7CC", // Turquoise
        accent2: "#FFD100", // Yellow
        background: "#F5F5F5", // Light Gray
        "text-dark": "#333333", // Dark Gray
        "text-gray": "#CCCCCC", // Light Gray
      },
    },
  },
  plugins: [],
};
