/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
    fundo: "rgb(var(--color-fundo) / <alpha-value>)",
    texto: "rgb(var(--color-texto) / <alpha-value>)",

    card: "rgb(var(--color-card) / <alpha-value>)",

    primaria: "rgb(var(--color-primaria) / <alpha-value>)",
    "primaria-topo": "rgb(var(--color-primaria-topo) / <alpha-value>)",

    secundaria: "rgb(var(--color-secundaria) / <alpha-value>)",
    "secundaria-topo": "rgb(var(--color-secundaria-topo) / <alpha-value>)",

    off: "rgb(var(--color-off) / <alpha-value>)",
    "off-texto": "rgb(var(--color-off-texto) / <alpha-value>)",

    border: "rgb(var(--color-border) / <alpha-value>)",

    destaque: "rgb(var(--color-destaque) / <alpha-value>)",
    superficie: "rgb(var(--color-superficie) / <alpha-value>)",
  },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    }
  },
  plugins: [],
}