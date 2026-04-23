/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
    "cor-fundo": "rgb(var(--cor-fundo) / <alpha-value>)",
    "cor-texto": "rgb(var(--cor-texto) / <alpha-value>)",

    "cor-superficie-card": "rgb(var(--cor-superficie-card) / <alpha-value>)",

    "cor-primaria": "rgb(var(--cor-primaria) / <alpha-value>)",
    "cor-primaria-texto": "rgb(var(--cor-primaria-texto) / <alpha-value>)",

    "cor-secundaria": "rgb(var(--cor-secundaria) / <alpha-value>)",
    "cor-secundaria-texto": "rgb(var(--cor-secundaria-texto) / <alpha-value>)",

    "cor-neutro": "rgb(var(--cor-neutro) / <alpha-value>)",
    "cor-neutro-texto": "rgb(var(--cor-neutro-texto) / <alpha-value>)",

    "cor-borda": "rgb(var(--cor-borda) / <alpha-value>)",

    "cor-destaque": "rgb(var(--cor-destaque) / <alpha-value>)",
    "cor-superficie": "rgb(var(--cor-superficie) / <alpha-value>)",
  },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    }
  },
  plugins: [],
}