export default {
    content: [
      "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./plugins/**/*.{js,ts,mjs}",
      "./composables/**/*.{js,ts,mjs}",
      "./utils/**/*.{js,ts,mjs}",
      "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "./app.config.{js,ts,mjs}",
      "./app/spa-loading-template.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
        },
        animation: {
          marquee: 'marquee 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [],
  }