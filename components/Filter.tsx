"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./ui/DropdownMenu";
import { pizzaSearchFilters } from "@/routes";

const Filter = ({ sortBy }: { sortBy: string }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  return (
    <div className="w-11/12 bg-white h-10 md:h-12 mb-4 rounded-lg flex items-center pl-6 pr-6 whitespace-nowrap shadow-lg">
      <div
        className="flex relative font-bold gap-1 cursor-pointer"
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      >
        Сортировать по:{" "}
        <span className="ml-1 underline">
          {sortBy === "relevance"
            ? "популярности"
            : sortBy === "alphabet"
            ? " алфавиту"
            : "цене"}
        </span>
        <Image
          src={"https://www.svgrepo.com/show/80156/down-arrow.svg"}
          width={10}
          height={10}
          alt="dropdown"
          className={`transition-all ${
            isDropdownMenuOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        <DropdownMenu
          isOpen={isDropdownMenuOpen}
          onClose={() => setIsDropdownMenuOpen(false)}
          options={pizzaSearchFilters}
        />
      </div>
    </div>
  );
};

export default Filter;
