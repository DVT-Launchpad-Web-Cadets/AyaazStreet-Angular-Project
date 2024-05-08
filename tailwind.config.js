/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        colors: {
            'white': '#f1f1f1',
            'black': '#111111',
            'primary': '#d6250d',
        },
        fontFamily: {
            "montserrat": ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}

