import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nexterria - Next.js Pizzeria",
  description:
    "Самая вкусная пицца, которую вы пробовали! Карбонара, Маргарита, Сырная, Четыре сезона, Гавайская и другие! Создайте пиццу на свой вкус в конструкторе... Большой выбор видов, быстрая доставка и скидки при заказе от 1000₽",
  icons: "/logos/nexterria.png",
};

const comfortaa = Comfortaa({
  subsets: ["cyrillic"],
  display: "swap",
});

const RootLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <html className={comfortaa.className}>
      <body className="min-h-screen">
        <div className="h-full bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 flex flex-col justify-center items-center pt-24 pb-4">
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
        <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
