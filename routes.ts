export const pages = [
  {
    name: "Пицца",
    href: "/",
  },
  {
    name: "Напитки",
    href: "/",
  },
  {
    name: "Десерты",
    href: "/",
  },
] as const;

export const pizzaSearchFilters = [
  {
    name: "по популярности",
    href: "/pizza?sortBy=relevance",
  },
  {
    name: "по алфавиту",
    href: "/pizza?sortBy=alphabet",
  },
  {
    name: "по цене",
    href: "/pizza?sortBy=price",
  },
] as const;
