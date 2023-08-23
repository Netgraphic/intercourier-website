/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "'./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'",
    ],
    theme: {
        extend: {
            colors: {
                "main-color": "#e8862c",
                "secondary-color": "#D15E49",
                "title-color": "#a03724",
                "menu-color": "#FCFCF3",
            },
            fontFamily: {
                "palanquin-dark": ["Palanquin Dark", "sans-serif"],
            },
            backgroundImage: {
                "desktop-hero": "url('./assets/images/desktop-hero.jpg')",
                "mobile-hero": "url('./assets/images/mobile-hero.jpg')",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
