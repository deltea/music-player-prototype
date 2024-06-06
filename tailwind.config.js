/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "muted": "#ddd",
        "neutral": "rgb(82 82 82)",
        "background": "#262626",
        "primary": "var(--color-primary)",
      },
      fontFamily: {
        "sans": ["Quicksand Variable", "sans-serif"],
      },
      borderRadius: {
        "xxl": "2.5rem",
      },
      rotate: {
        "skew": "-35deg",
      },
      ringWidth: {
        "3": "3px",
      },
      fontSize: {
        "icon": "2.5rem",
      },
      spacing: {
        "gameboy-width": "20rem",
        "gameboy-height": "30rem",
        "pager-width": "30rem",
        "pager-height": "16rem",
      }
    },
  },
  plugins: [],
}
