import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Un Parco per Vellano — Iniziativa Cittadina",
  description:
    "Riqualifichiamo l'area verde di Via della Piazza Giardino a Vellano: uno spazio sicuro e a norma per i 32 bambini del paese. Firma la petizione e sostieni il progetto.",
  openGraph: {
    title: "Un Parco per Vellano",
    description:
      "Progetto della comunità per restituire ai bambini di Vellano uno spazio sicuro e a norma.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
