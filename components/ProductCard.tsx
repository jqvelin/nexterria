import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProductCard: FC<IProduct> = ({id, title, description, price, thumbnail}) => {
    return (
        <div className="flex flex-col items-center">
            <Image src={thumbnail} width={0} height={0} sizes="100vw" className="w-52 h-52 md:w-60 md:h-60" alt={title}/>
            <h3 className='font-bold text-xl md:text-2xl mb-4'>{title}</h3>
            <p className="w-9/12 text-center mb-2">{description}</p>
            <div className="w-full flex items-center justify-center mt-auto gap-4">
                <div className="font-bold text-xl md:text-2xl">от {price}₽</div>
                <Link href={`/product?category=pizza&id=${id}&size=medium&dough=traditional`} className="pt-2 pb-2 pl-4 pr-4 bg-orange-300 rounded-md text-white transition-colors hover:bg-orange-400">Выбрать</Link>
            </div>
        </div>
    );
};

export default ProductCard;