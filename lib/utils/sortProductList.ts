import { IProduct } from "@/types";

export default function sortProductList(
  productList: IProduct[],
  sortBy: string
) {
  const ruCollator = new Intl.Collator("ru-RU")
  switch (sortBy) {
    case "relevance":
      return productList;
    case "alphabet":
      return productList.toSorted((a, b) => ruCollator.compare(a.title, b.title));
    case "price":
      return productList.toSorted((a, b) => a.price - b.price);
    default:
      return productList;
  }
}
