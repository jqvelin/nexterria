import productDatabase from "@/db/productDatabase";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  switch (searchParams.category) {
    case "pizza":
      const category = productDatabase.get(searchParams.category);
      const [id, size, dough] = [
        parseInt(searchParams.id),
        searchParams.size,
        searchParams.dough,
      ];
      const product = category?.find((item) => item.id === id) as IProduct;
      if (!product) throw new Error("No such product found");
      const price =
        product.price + (size === "small" ? 0 : size === "medium" ? 30 : 60);
      return (
        <div className="w-11/12 h-screen flex flex-col md:flex-row pb-64 relative">
          <Link href="/">
            <Image
              src={"https://www.svgrepo.com/show/80156/down-arrow.svg"}
              width={30}
              height={30}
              alt="Dropdown"
              className="rotate-90 absolute left-0 top-0"
            />
          </Link>
          <div className="flex-1 h-full flex items-center justify-center">
            <Image
              src={product.thumbnail}
              width={0}
              height={0}
              sizes="100vw"
              className="w-1/2"
              alt="Preview"
            />
          </div>
          <div className="flex-1 h-full flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">
              {product.title}
            </h1>
            <p>{product.description}</p>
            <div className="bg-gray-300 rounded-sm text-white font-bold flex items-center justify-between pl-2 pr-2 h-8 gap-2 text-center w-9/12 overflow-x-auto">
              <Link
                href={`product?category=pizza&id=${id}&size=small&dough=${dough}`}
                className={`flex-1 rounded-sm transition-colors ${
                  size === "small" ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                Маленькая
              </Link>
              <Link
                href={`product?category=pizza&id=${id}&size=medium&dough=${dough}`}
                className={`flex-1 rounded-sm transition-colors ${
                  size === "medium" ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                Средняя
              </Link>
              <Link
                href={`product?category=pizza&id=${id}&size=large&dough=${dough}`}
                className={`flex-1 rounded-sm transition-colors ${
                  size === "large" ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                Большая
              </Link>
            </div>
            <div className="bg-gray-300 rounded-sm text-white font-bold flex items-center justify-between pl-2 pr-2 h-8 gap-2 text-center w-9/12 overflow-x-auto">
              <Link
                href={`product?category=pizza&id=${id}&size=${size}&dough=traditional`}
                className={`flex-1 rounded-sm transition-colors ${
                  dough === "traditional" ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                Традиционное
              </Link>
              <Link
                href={`product?category=pizza&id=${id}&size=${size}&dough=thin`}
                className={`flex-1 rounded-sm transition-colors ${
                  dough === "thin" ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                Тонкое
              </Link>
            </div>
            <AddToCartButton
              product={{
                ...product,
                id:
                  id *
                  price *
                  (size === "large" ? 2 : size === "medium" ? 3 : 4) *
                  (dough === "traditional" ? 1 : 2),
                price,
                size,
                dough,
              }}
            />
          </div>
        </div>
      );
  }
}
