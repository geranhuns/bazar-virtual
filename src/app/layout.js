import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazar Virtual Consume Local",
  description: "Tienda virtual que apoya al comercio local",
  authors: [
    {
      name: "Gerardo Nuncio",
      name: "Carlos Hermosillo",
      name: "Arturo Zambrano",
    },
  ],
  keywords: [
    "tienda virtual",
    "bazarvirtual.mx",
    "comercio local",
    "consume local",
    "artesanías",
    "artesanos locales",
    "productos locales",
    "bazares gdl",
    "bazares mexicanos",
  ],
  publisher: "Bazar Virtual Consume Local",
  referrer: "origin-when-cross-oringin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
