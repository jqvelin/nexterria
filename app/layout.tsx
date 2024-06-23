import { ReactNode } from "react";
import './globals.css'
import { Metadata } from "next";
import { Comfortaa } from 'next/font/google'
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Nexterria - Next.js Pizzeria',
  description: 'Самая вкусная пицца, которую вы пробовали! Карбонара, Маргарита, Сырная, Четыре сезона, Гавайская и другие! Создайте пиццу на свой вкус в конструкторе... Большой выбор видов, быстрая доставка и скидки при заказе от 1000₽',
  icons: '/icon.png'
}

const comfortaa = Comfortaa({
  subsets: ['cyrillic'],
  display: 'swap'
})

const RootLayout = ({children}: {children: Readonly<ReactNode>}) => {
  return (
    <html className={comfortaa.className}>
      <body className='min-h-screen justify-center bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 flex flex-col items-center pt-24 pb-4'>
        <StoreProvider>
          <Header/>
          {children}
        </StoreProvider>
        <Toaster/>
        <footer className="h-14 md:h-16 w-11/12 mt-6 pl-6 pr-6 rounded-xl bg-white flex items-center gap-4 justify-start shadow-md whitespace-nowrap overflow-x-auto">
          <Link href='https://github.com/jqvelin' target="_blank">
            <Image src='/github-mark.png' width={0} height={0} sizes="100vw" className="min-w-10" alt='GitHub'/>
          </Link>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;



