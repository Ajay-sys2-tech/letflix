import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Letflix",
  description: "Letflix and Kill!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
