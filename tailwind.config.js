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
            spacing: {
                '200': '30rem',
                '400': '70rem',
            },
            backgroundSize: {
                '70%': '200%',
                '90%': '90%',
            },
      },
      container: {
          center: true,
          padding: '2em',
      },
    },
    plugins: [],
}