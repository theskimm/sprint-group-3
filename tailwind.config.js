/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // new
      // primary
      "highlight-teal": "rgb(var(--highlight-teal) / <alpha-value>)",
      "pop-of-teal": "rgb(var(--pop-of-teal) / <alpha-value>)",
      "accent-teal": "rgb(var(--accent-teal) / <alpha-value>)",
      "skimm-teal": "rgb(var(--skimm-teal) / <alpha-value>)",
      "warm-teal": "rgb(var(--warm-teal) / <alpha-value>)",
      "dark-teal": "rgb(var(--dark-teal) / <alpha-value>)",

      // neutral
      white: "rgb(var(--white) / <alpha-value>)",
      "gray-100": "rgb(var(--gray-100) / <alpha-value>)",
      "gray-200": "rgb(var(--gray-200) / <alpha-value>)",
      "gray-300": "rgb(var(--gray-300) / <alpha-value>)",
      "gray-400": "rgb(var(--gray-400) / <alpha-value>)",
      "gray-500": "rgb(var(--gray-500) / <alpha-value>)",
      "gray-600": "rgb(var(--gray-600) / <alpha-value>)",
      "gray-700": "rgb(var(--gray-700) / <alpha-value>)",
      "gray-800": "rgb(var(--gray-800) / <alpha-value>)",
      black: "rgb(var(--black) / <alpha-value>)",

      // secondary
      "soft-teal-100": "rgb(var(--soft-teal-100) / <alpha-value>)",
      "soft-teal-200": "rgb(var(--soft-teal-200) / <alpha-value>)",
      "soft-teal-300": "rgb(var(--soft-teal-300) / <alpha-value>)",

      "greige-100": "rgb(var(--greige-100) / <alpha-value>)",
      "greige-200": "rgb(var(--greige-200) / <alpha-value>)",
      "greige-300": "rgb(var(--greige-300) / <alpha-value>)",

      "sage-100": "rgb(var(--sage-100) / <alpha-value>)",
      "sage-200": "rgb(var(--sage-200) / <alpha-value>)",
      "sage-300": "rgb(var(--sage-300) / <alpha-value>)",

      "peach-100": "rgb(var(--peach-100) / <alpha-value>)",
      "peach-200": "rgb(var(--peach-200) / <alpha-value>)",
      "peach-300": "rgb(var(--peach-300) / <alpha-value>)",

      // error
      "error-500": "rgb(var(--error-500) / <alpha-value>)",
    },
    lineHeight: {
      12: "12px",
      14: "14px",
      16: "16px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      48: "48px",
      54: "54px",
      74: "74px",
    },
    letterSpacing: {
      // new
      ".02": "0.02em",
      ".1": "0.1em",
    },
    fontSize: {
      11: "11px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      32: "32px",
      40: "40px",
      46: "46px",
      70: "70px",
    },
    spacing: {
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
      "2/5": "40%",
      "1/2": "50%",
      "11/20": "55%",
      "3/5": "60%",
      1: "100%",
      0: "0px",
      2: "2px", //
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      36: "36px", //
      40: "40px",
      45: "45px", //
      48: "48px",
      64: "64px",
      80: "80px",
      96: "96px",
      128: "128px", //
      160: "160px",
      180: "180px", //
      224: "224px", //
      256: "256px", //
      310: "310px", //
      360: "360px", //
      420: "420px", //
      640: "640px", //
      1200: "1200px", //
    },
    extend: {
      fontFamily: {
        sangbleu: ["var(--font-sangbleu)", "Arial", "sans-serif"],
        ["gt-america"]: ["var(--font-gt-america)", "Arial", "sans-serif"],
        ["gt-america-mono"]: [
          "var(--font-gt-america-mono)",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
