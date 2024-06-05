/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "muted": "#ddd",
        "background": "rgb(82 82 82)",
        "primary": "var(--color-primary)",

        // Skins
        "red": "rgb(248 113 113)",
        "yellow": "rgb(251 191 36)",
        "blue": "rgb(96 165 250)",
        "green": "rgb(52 211 153)",
        "purple": "rgb(167 139 250)",
        "rose": "rgb(251 113 133)",
        "stone": "rgb(168 162 158)"
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
      }
    },
  },
  plugins: [],
}
