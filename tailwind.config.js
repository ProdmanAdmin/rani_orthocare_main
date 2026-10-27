// Colours come from the CSS variables in app/globals.css, so the design system can be swapped in one place.
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: token("brand"),
        ink: token("ink"),
        body: token("body"),
        muted: token("muted"),
        surface: token("surface"),
      },
    },
  },
  plugins: [],
};
