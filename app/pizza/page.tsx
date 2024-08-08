import Filter from "@/components/Filter";
import Search from "@/components/Search";
import ProductCatalog from "@/components/products/ProductCatalog";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return <>
  <div className="flex w-11/12 gap-2">
    <Search />
    <Filter sortBy={searchParams.sortBy}/>
  </div>
    <ProductCatalog productCategory="pizza" searchParams={searchParams} />
  </>
};

export default page;
