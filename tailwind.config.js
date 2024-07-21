/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // Your custom theme extensions here
    },
    container: {
      center: true,
      padding: '1rem', // Optional: Add padding to the container
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
