/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        colors: {
            'white': '#efefef',
            'black': '#111111',
            'primary': '#ee7850',
        },
        fontFamily: {
            "montserrat": ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}

