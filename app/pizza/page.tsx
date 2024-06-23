import ProductCatalog from "@/components/products/ProductCatalog";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return <ProductCatalog productCategory="pizza" searchParams={searchParams} />;
};

export default page;
