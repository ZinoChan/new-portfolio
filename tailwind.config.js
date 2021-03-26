const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                oswald: ['Oswald', ...defaultTheme.fontFamily.sans],
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: '#009EED',
               
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [],
}

