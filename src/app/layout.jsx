import localFont from "next/font/local";
import "./globals.css";

const degularSans = localFont({
    src: [
        {
            path: '/fonts/Degular-Thin.woff',
            weight: '200',
            style: 'normal'
        },
        {
            path: '/fonts/Degular-Light.woff',
            weight: '300',
            style: 'normal'
        },
        {
            path: '/fonts/Degular-Regular.woff',
            weight: '400',
            style: 'normal'
        },
        {
            path: '/fonts/Degular-Semibold.woff',
            weight: '600',
            style: 'normal'
        },
        {
            path: '/fonts/Degular-Bold.woff',
            weight: '700',
            style: 'normal'
        },
        {
            path: '/fonts/Degular-Black.woff',
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
        <html lang="en">
        <body className={`${degularSans.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}