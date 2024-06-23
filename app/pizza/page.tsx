import Filter from '@/components/Filter';
import ProductCard from "@/components/ProductCard";
import Search from '@/components/Search';
import pizza from "@/db/pizza";

const page = async ({searchParams}: {searchParams: {[key: string]: string}}) => {
  await new Promise(res => setTimeout(res, 1000))
  let productList = searchParams.sortBy === 'relevance' ? pizza : (searchParams.sortBy === 'alphabet' ? pizza.toSorted((a, b) => a.title.localeCompare(b.title)) : pizza.toSorted((a, b) => a.price - b.price))
  if (searchParams.q) {
    productList = productList.filter(product => product.title.toLowerCase().includes(searchParams.q.toLowerCase()))
  }
  if (!productList.length) {
    return <>
      <Filter sortBy={searchParams.sortBy}/>
      <Search/>
      <h1>Ничего не найдено:(</h1>
    </>
  }
  return <>
    <Filter sortBy={searchParams.sortBy}/>
    <Search/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12">
            {productList.map(pizza => {
                return <ProductCard key={pizza.id} {...pizza}/>
            })}
    </div>
  </>
};

export default page;