'use client'
import { useAppDispatch } from "@/lib/state/hooks";
import { IProduct } from "../../types";
import { addToCart } from "@/lib/state/cartSlice";
import { toast } from "./use-toast";
import { pizzaLocales } from "@/lib/utils/toLocale";

const PurchaseButton = ({
  product,
}: {
  product: IProduct & { size: string; dough: string };
}) => {
  const dispatch = useAppDispatch();
  function handleAddToCart() {
    toast({title: 'Товар добавлен в корзину!', description: `${product.title} (${pizzaLocales.get('sizes')?.get(product.size)}, ${pizzaLocales.get('dough')?.get(product.dough)} тесто)`})
    dispatch(addToCart(product));
  }
  return (
    <button
      className="px-6 py-3 mt-6 font-bold bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
      onClick={handleAddToCart}
    >
      В корзину за {product.price}₽
    </button>
  );
};

export default PurchaseButton;
