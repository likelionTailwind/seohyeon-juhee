/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "799px" },

      md: { min: "800px", max: "1015px" },

      lg: { min: "1016px" },
    },

    fontSize: {
      "2xl": [
        "60px",
        {
          lineHeight: "72px",
          letterSpacing: "-0.03em",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.03em",
        },
      ],
      normal: [
        "16px",
        {
          fontWeight: 700,
          lineHeight: "24px",
          letterSpacing: "-0.03em",
        },
      ],
      xs: [
        "22px",
        {
          fontWeight: 700,
          lineHeight: "26.4px",
          letterSpacing: "-0.03em",
        },
      ],
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
