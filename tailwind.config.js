/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				serif: ["Prata", "serif"],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				palegreen: "#95FFD4",
				cornflower: "#6278F7",
				lightgray: "#F2F2F2",
				equipo: {
					pr: {
						card: "#57C278",
						fondo: "#D9F7E9",
					},
					fe: {
						card: "#82CFFA",
						fondo: "#E8F8FF",
					},
					ds: {
						card: "#A6D157",
						fondo: "#F0F8E2",
					},
					do: {
						card: "#E06B69",
						fondo: "#FDE7E8",
					},
					ud: {
						card: "#DB6EBF",
						fondo: "#FAE9F5",
					},
					mov: {
						card: "#FFBA05",
						fondo: "#FFF5D9",
					},
					ig: {
						card: "#FF8A29",
						fondo: "#FFEEDF",
					},
				},
			},
			boxShadow:{
				colaborador:"5px 5px 15px 0px rgba(0,0,0,0.8);",
			},
		},
	},
	plugins: [],
};
