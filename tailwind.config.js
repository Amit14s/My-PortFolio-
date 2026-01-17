export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "50%": { width: "18ch" },
          "100%": { width: "0ch" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(18) infinite",
      },
    },
  },
};
