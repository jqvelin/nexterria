import ProductPage from "@/components/products/ProductPage";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return <ProductPage searchParams={searchParams}/>
};

export default page;
