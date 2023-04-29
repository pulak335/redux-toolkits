import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";



const initialState = {
    cartItems:cartItems,
    totalPrice: 0,
    totalItem: 4,
    isLoading:true
}


const cartSlice = createSlice({
    name:'cart',
    initialState
})

// console.log(cartSlice)


export default cartSlice.reducer;