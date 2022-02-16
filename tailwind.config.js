const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "app.html",
        "./src/app.js",
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
            scale: {
                '3000': '30.0',
            },
      },
      container: {
          center: true,
          padding: '2em',
      },
    },
    plugins: [],
}