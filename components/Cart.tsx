'use client'
import { clearCart, removeFromCart } from '@/lib/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useToast } from './ui/use-toast';

const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const { toast } = useToast()
    function handleOrder() {
        dispatch(clearCart())
        toast({
            title: 'Заказано!'
        })
    }
    return (
        <div className="h-screen w-11/12">
            <h1 className='font-bold text-2xl md:text-3xl mb-6'>Корзина</h1>
            {!cart.items.length 
            ? <div className='flex flex-col items-center'>
                <h2 className='font-bold text-2xl md:text-3xl'>Здесь пока пусто...</h2>
                <Link href='/' className="pl-6 pr-6 pt-3 pb-3 mt-6 font-bold bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    К ассортименту
                </Link>
            </div>
            : <div className='flex flex-col h-full items-end'>
                <ul className='h-1/2 overflow-y-scroll w-full'>
                    {cart.items.map(item => <li key={item.id} className='flex pl-4 pr-4 items-center relative'>
                        <Image src={item.thumbnail} sizes="100vw" width={0} height={0} className='w-16 sm:w-24 md:w-32' alt='preview'/>
                        <div className='flex flex-col items-start'>
                            <h3 className='font-bold text-xl md:text-2xl'>{`${item.title} (${item.amount})`}</h3>
                            <p>{item.description}</p>
                        </div>
                        <button className='absolute right-4' onClick={() => dispatch(removeFromCart(item))}>x</button>
                    </li>)}
                </ul>
                <button className="pl-6 pr-6 pt-3 pb-3 mt-6 font-bold bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors self-end" onClick={handleOrder}>
                    Заказать
                </button>
            </div>
        }
        </div>
    );
};

export default Cart;


