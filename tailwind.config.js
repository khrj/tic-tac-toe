module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "display": [
                    "-apple-system,",
                    "BlinkMacSystemFont,",
                    "Segoe",
                    "UI,",
                    "Roboto,",
                    "Oxygen,",
                    "Ubuntu,",
                    "Cantarell,",
                    "Fira",
                    "Sans,",
                    "Droid",
                    "Sans,",
                    "Helvetica",
                    "Neue,",
                    "sans-serif",
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
