import Filter from "@/components/Filter";
import Search from "@/components/Search";
import ProductCatalog from "@/components/products/ProductCatalog";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return <>
    <Filter sortBy={searchParams.sortBy}/>
    <Search />
    <ProductCatalog productCategory="pizza" searchParams={searchParams} />
  </>
};

export default page;
