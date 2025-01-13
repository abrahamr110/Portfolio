import { Header } from "../components/Header";
import { StairTransition } from "../components/StairTransition";
import { PageTransition } from "../components/PageTransition";
import { JetBrains_Mono } from "next/font/google"; // Importar desde 'next/font/google'
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Portafolio web",
    description: "Generado por Abraham Rodríguez",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={jetbrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
