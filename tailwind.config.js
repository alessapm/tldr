module.exports = {
    mode: 'jit',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    purge: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'c-blue': '#09d4cf',
          'c-yellow': '#f7e39a',
          'c-pink': '#fe228a'
        }
      },
      fontFamily: {
        'sans': ['Roboto'],
        'display': ['Bevan'],
        'serif': ['Georgia']
      }
    },
    plugins: [],
  };
  