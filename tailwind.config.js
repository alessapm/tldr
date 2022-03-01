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
      extend: {},
      fontFamily: {
        'sans': ['Roboto'],
        'display': ['Bevan']
      }
    },
    plugins: [],
  };
  