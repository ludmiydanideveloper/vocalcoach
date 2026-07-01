import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barby | Entre Canciones - Vocal Coach & Artista (Clases Presenciales y Online)',
  description: 'Descubre tu verdadera voz con Barby en Entre Canciones. Clases de canto presenciales y virtuales, técnica vocal biomecánica sin daño, agilidad y cursos online diseñados para llevar tu arte al siguiente nivel.',
  keywords: ['vocal coach', 'barby', 'entre canciones', 'clases de canto', 'técnica vocal', 'canto online', 'aprender a cantar', 'canto presencial'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
