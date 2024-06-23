"use client";
import createDebouncedFunction from "@/lib/utils/createDebouncedFunction";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const search = createDebouncedFunction(
    () => router.push(pathname + "?" + createQueryString("q", searchQuery)),
    500
  );
  useEffect(() => search(), [searchQuery]);
  return (
    <div className="w-11/12 bg-white h-10 md:h-12 mb-4 rounded-lg flex items-center pl-6 pr-6 whitespace-nowrap shadow-lg">
      <div className="flex relative font-bold gap-2 cursor-pointer">
        <Image
          src="/icons/magnifying-glass.svg"
          width={20}
          height={20}
          alt="search"
        />
        <input
          type="text"
          placeholder="Поиск"
          className="outline-none"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
