/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./home.html","profile.html", "reward.html","./src/**/*.{js,html}",  "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

