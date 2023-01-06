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
                secondary: '#2a2839',
                tertiary: '#12111B',
                accent: '#723ceb',
                'primary-t': '#f7f7f7',
                'secondary-t': '#A29CDE',
                'tertiary-t': '#5a567c',
                'darker-t': '#868686'
            },
        },
    },
    plugins: [require('daisyui')],
}