import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import StoreProvider from "@/app/StoreProvider";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "Записаться на танцы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body className={inter.className}>
              <div className="container">
                  <Header />
                    <StoreProvider>{children}</StoreProvider>
                  <Footer />
              </div>
          </body>
        </html>
  );
}
