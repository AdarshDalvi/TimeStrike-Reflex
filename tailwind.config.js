/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-turqoise': '#54a399',
            },
            animation: {
                blink: 'blink 1s infinite',
                slideInFromTop: 'slide-in-from-top 0.35s ease-out',
            },
            keyframes: {
                blink: {
                    '0%': { opacity: '1' },
                    '50%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInFromTop: {
                    '0%': {
                        transform: 'translateY(-15%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
            },
        },
    },
    plugins: [],
};
