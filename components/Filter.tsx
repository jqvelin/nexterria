"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropdownMenu from "./ui/DropdownMenu";
import { pizzaSearchFilters } from "@/routes";

const Filter = ({ sortBy }: { sortBy: string }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  return (
    <div className="w-11/12 bg-white h-10 md:h-12 mb-4 rounded-lg flex items-center pl-6 pr-6 shadow-lg">
      <div
        className="flex relative font-bold gap-1 cursor-pointer"
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      >
        <Image
          src={"https://www.svgrepo.com/show/2287/sort.svg"}
          width={20}
          height={20}
          alt="sort"
        />
        <span className="ml-1 underline text-[10px] md:text-[16px]">
          {sortBy === "relevance"
            ? "по популярности"
            : sortBy === "alphabet"
            ? "по алфавиту"
            : "по цене"}
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
