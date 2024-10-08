import "./globals.css";

export const metadata = {
    title: "Tamara Rammsy - Concejala",
    description: "Hola vecinas y vecinos, soy Tamara Rammsy, madre, arquitecta y candidata a concejala por Puerto Varas. Quiero trabajar para que tengamos mejores espacios públicos, barrios más seguros y mejor conectados para nuestras familias. Este 26 y 27 de octubre, vota U-281. Para construir una comuna más justa y amable, Cuenta conmigo",
    keywords: ['tamararammsyconcejala', 'cuentaconmigopuertovaras', 'tomasgarate', 'puertovaras', 'votaxtamara', 'vota281'],
    icons: {
        icon: '/favicon.svg',
        apple: '/favicon.png',
        other: {
            rel: 'apple-touch-icon-precomposed', url: '/favicon.png',
        },
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="es">
        <body>{children}
        </body>
        </html>
    );
}