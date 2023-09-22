import { createTheme } from "@mui/material";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	typography: {
		fontFamily: "Lexend,  sans-serif",
		// allVariants: {
		// 	color: "#000",
		// },
		button: {
			textTransform: "unset",
		},
	},
	palette: {
		primary: {
			main: "#f36d6c",
			light: "#f79998",
			dark: "#c25756",
			50: "#fef0f0",
			100: "#fbd3d3",
			200: "#f9b6b6",
			300: "#f79998",
			400: "#f47c7b",
			500: "#db6261",
			600: "#c25756",
			700: "#aa4c4c",
			800: "#7a3736",
			900: "#492120",
			contrastText: "#fff",
		},
		secondary: {
			main: "#fd977d",
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
		success: {
			light: "#9bd99b",
			main: "#5ec25e",
			dark: "#36b336",
			contrastText: "#fff",
		},
		info: {
			main: "#ffffff",
			contrastText: "#401b60",
		},
		warning: {
			light: "#f3b999",
			main: "#ed9666",
			dark: "#e15000",
			contrastText: "#fff",
		},
		error: {
			light: "#d0736e",
			main: "#c1453d",
			dark: "#b1160d",
			contrastText: "#fff",
		},
	},
});

export default theme;
