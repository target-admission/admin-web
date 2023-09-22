/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Lexend",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				serif: [
					"Lexend",
					"ui-serif",
					"Georgia",
					"Cambria",
					"Times New Roman",
					"Times",
					"serif",
				],
			},
			colors: {
				primary: {
					DEFAULT: "#f36d6c",
					light: "#f79998",
					dark: "#c25756",
					100: "#fbd3d3",
					200: "#f9b6b6",
					300: "#f79998",
					400: "#f47c7b",
					500: "#db6261",
					600: "#c25756",
					700: "#aa4c4c",
					800: "#7a3736",
					900: "#492120",
				},
				secondary: {
					DEFAULT: "#fd977d",
					light: "#fec1b1",
					dark: "#b16a58",
					100: "#fec1b1",
					200: "#feb6a4",
					300: "#fdac97",
					400: "#fda18a",
					500: "#fd977d",
					600: "#e48871",
					700: "#ca7964",
					800: "#b16a58",
					900: "#985b4b",
					contrastText: "#fff",
				},
				background: {
					DEFAULT: "#E6E8F1",
					light: "#FFFFFF",
					dark: "#F1F5F9",
				},
				text: {
					DEFAULT: "#2D3D45",
					light: "#4A6979",
					dark: "#414141",
				},
			},
		},
		screens: {
			xs: "375px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
	important: true,
};
