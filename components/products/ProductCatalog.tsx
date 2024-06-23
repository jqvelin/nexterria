import sortProductList from "@/lib/utils/sortProductList";
import ProductCard from "./ProductCard";
import productDatabase from "@/db/productDatabase";
import { IProduct } from "@/types";

export default function ProductCatalog({
  productCategory,
  searchParams,
}: {
  productCategory: string;
  searchParams: { [key: string]: string };
}) {
  let productList = sortProductList(
    productDatabase.get(productCategory) as IProduct[],
    searchParams.sortBy
  );
  if (searchParams.q) {
    productList = productList.filter((product) =>
      product.title.toLowerCase().includes(searchParams.q.toLowerCase())
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12">
      {productList.map((pizza) => {
        return <ProductCard key={pizza.id} {...pizza} />;
      })}
    </div>
  );
}
