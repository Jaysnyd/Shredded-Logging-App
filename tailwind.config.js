module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./context/**/*.{js,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#426D60",
        secondary: "#4CB491",
        accent: "[rgba(66, 109, 96, 0.2)]",
      },
    },
  },
  plugins: [],
};
