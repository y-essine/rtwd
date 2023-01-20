/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#151616',
                secondary: '#212222',
                lighter: '#323232',
                tertiary: '#12111B',
                accent: '#723ceb',
                'accent-light': '#906ab4',
                'primary-t': '#f7f7f7',
                'secondary-t': '#A29CDE',
                'tertiary-t': '#5a567c',
                'darker-t': '#868686'
            },
            screens: {
                'xs': '560px',
                '2xs': '370px'
            }
        },
    },
}