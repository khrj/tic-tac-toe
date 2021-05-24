module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
