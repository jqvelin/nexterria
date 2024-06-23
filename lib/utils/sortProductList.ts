import { IProduct } from "@/types";

export default function sortProductList(
  productList: IProduct[],
  sortBy: string
) {
  switch (sortBy) {
    case "relevance":
      return productList;
    case "alphabet":
      return productList.toSorted((a, b) => a.title.localeCompare(b.title));
    case "price":
      return productList.toSorted((a, b) => a.price - b.price);
    default:
      return productList;
  }
}
