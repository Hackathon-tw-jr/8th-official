const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "app.html",
        "./src/app.js", 
        "./node_modules/flowbite/**/*.js"
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
                '100': '15rem',
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
            backgroundPosition: {
                'top-100-left-100': 'top 25rem left 25rem',
                'top-4': 'top 1rem',

            },
            screens: {
                'xl': '2560px'
            }

        },
        container: {
            center: true,
            padding: '2em',
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}