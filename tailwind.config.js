/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        analogue: {
          ink: "#1C1C1E",
          muted: "#6E6E73",
          line: "#E5E5EA",
          paper: "#F8F8F6",
          blue: "#2F80ED",
          green: "#34C759",
          amber: "#FFB020",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(28, 28, 30, 0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
