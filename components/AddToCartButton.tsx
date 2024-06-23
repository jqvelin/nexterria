import { useAppDispatch } from "@/lib/hooks";
import { IProduct } from "../types"
import { addToCart } from "@/lib/cartSlice";

const PurchaseButton = ({product}: {product: IProduct & {size: string, dough: string}}) => {
    const dispatch = useAppDispatch()
    function handleAddToCart(){
        dispatch(addToCart(product))
    }
    return <button className="pl-6 pr-6 pt-3 pb-3 mt-6 font-bold bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors" onClick={handleAddToCart}>
        В корзину за {product.price}₽
        </button>

};

export default PurchaseButton;