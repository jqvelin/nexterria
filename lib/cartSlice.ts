import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {items: (IProduct & {amount: number})[]} = {items: []}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: {payload: IProduct}) {
            const sameItem = state.items.find(item => item.id === action.payload.id)
            if (sameItem) {
                sameItem.amount++
            } else {
                state.items.push({...action.payload, amount: 1})
            }
        },
        removeFromCart(state, action: {payload: IProduct}) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clearCart(state){
            state.items = []
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer