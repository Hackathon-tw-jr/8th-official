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
            }
      },
      container: {
          center: true,
          padding: '1em',
      },
    },
    plugins: [],
}