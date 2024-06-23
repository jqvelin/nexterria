"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/lib/state/hooks";
import { pages } from "@/routes";
import DropdownMenu from "./ui/DropdownMenu";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  return (
    <header className="fixed z-10 top-4 h-14 md:h-16 w-11/12 pl-6 pr-6 rounded-xl bg-white flex items-center justify-between shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logos/nexterria.png"
          height={0}
          width={0}
          sizes="100vw"
          className="h-10 w-10 md:h-12 md:w-12"
          alt="Logo"
        />
        <h1 className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold text-xl md:text-2xl">
          Nexterria
        </h1>
      </Link>
      <nav className="flex gap-4">
        <ul className="hidden sm:flex gap-4 font-bold">
          {pages.map((route, index) => {
            return (
              <Link key={index} href={route.href}>
                {route.name}
              </Link>
            );
          })}
        </ul>
        <div
          className="sm:hidden flex font-bold items-center gap-1 relative cursor-pointer"
          onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
        >
          <DropdownMenu
            isOpen={isDropdownMenuOpen}
            onClose={() => setIsDropdownMenuOpen(false)}
            options={pages}
          />
          <Image
            src={"https://www.svgrepo.com/show/80156/down-arrow.svg"}
            width={10}
            height={10}
            alt="Dropdown"
            className={`transition-all ${
              isDropdownMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <Link href="/cart" className="flex items-center">
          <Image
            src="/icons/shopping-cart.png"
            width={20}
            height={20}
            alt="Shopping Cart"
          />
          <span className="ml-2 font-bold">
            {cart.items.reduce(
              (acc, cur) => (acc += cur.price * cur.amount),
              0
            )}
            ₽
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
