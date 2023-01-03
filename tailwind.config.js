/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/Welcome.{js,jsx,ts,tsx}",
    "./src/Signup.{js,jsx,ts,tsx}",
    "./src/Todo.{js,jsx,ts,tsx}",

    // Components
    "./components/Profils.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
