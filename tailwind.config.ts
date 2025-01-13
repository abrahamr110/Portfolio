import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },

        extend: {
            colors: {
                primary: "#1c1c22",
                accent: {
                    DEFAULT: "#ba0000",
                    hover: "#750101",
                },
            },
            fontFamily: {
                primary: ["var(--font-jetbrains-mono)"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
