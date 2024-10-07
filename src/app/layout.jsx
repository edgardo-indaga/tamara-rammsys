import localFont from "next/font/local";
import "./globals.css";

const degularSans = localFont({
    src: [
        {
            path: '../public/fonts/Degular-Thin.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../public/fonts/Degular-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/fonts/Degular-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/Degular-Semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../public/fonts/Degular-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/Degular-Black.woff2',
            weight: '800',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-degular-sans'
});

export const metadata = {
    title: "Tamara Rammsy - Concejala",
    description: "Hola vecinas y vecinos, soy Tamara Rammsy, madre, arquitecta y candidata a concejala por Puerto Varas. Quiero trabajar para que tengamos mejores espacios públicos, barrios más seguros y mejor conectados para nuestras familias. Este 26 y 27 de octubre, vota U-281. Para construir una comuna más justa y amable, Cuenta conmigo",
    keywords: ['tamararammsyconcejala', 'cuentaconmigopuertovaras', 'tomasgarate', 'puertovaras', 'votaxtamara', 'vota281'],
    icons: {
        icon: '/favicon.svg',
        apple: '/favicon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/favicon.png',
        },
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body className={`${degularSans.variable} font-sans antialiased`}>
            {children}
        </body>
        </html>
    );
}