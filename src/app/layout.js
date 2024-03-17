import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Providers from "./Providers";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Letflix",
  description: "Letflix and Kill!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers >
        <Suspense>
          <Header />
          <Navbar />
          {children}
        </Suspense>
      </Providers>
      </body>
    </html>
  );
}
