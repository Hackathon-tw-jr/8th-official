const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/app.html",
        "./src/app.js",
        "./src/theme/theme.html",
        "./src/schedule/schedule.html",
        "./src/schedule/schedule.js",
    ],
    theme: {
      extend: {
            colors: {
                'cyan-secnd-100': "#6da79d",
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
      },
      container: {
          center: true,
          padding: '2em',
      },
    },
    plugins: [],
}