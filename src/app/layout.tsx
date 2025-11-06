import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Clínica de Rehabilitación del Valle S.A.S | Tuluá",
  description: "Clínica especializada en fisioterapia, fonoaudiología, medicina física y rehabilitación, y psicología en Tuluá, Valle del Cauca.",
  keywords: ["rehabilitación", "fisioterapia", "fonoaudiología", "psicología", "Tuluá", "Valle del Cauca"],
  authors: [{ name: "Clínica de Rehabilitación del Valle S.A.S" }],
  openGraph: {
    title: "Clínica de Rehabilitación del Valle S.A.S",
    description: "Clínica especializada en rehabilitación integral en Tuluá",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
