/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textColor: {
      primary: "#E87070",
      secondary: "rgba(0, 0, 0, 0.4)",
      subHeading: "rgba(0, 0, 0, 0.58)",
      subTitle: "rgba(232, 112, 112, 0.6)",
      white: "#fff",
    },
    borderColor: {
      pink: "#E87070",
      primary: "rgba(232, 112, 112, 0.4)",
    },
    backgroundColor: {
      primary: "#E87070",
    },
    extend: {},
  },
  plugins: [],
};
