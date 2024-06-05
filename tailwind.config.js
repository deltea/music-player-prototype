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
        "height": "30rem",
        "width": "20rem",
      }
    },
  },
  plugins: [],
}
