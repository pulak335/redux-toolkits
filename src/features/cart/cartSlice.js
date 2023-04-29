import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cartItems:[],
    totalPrice: 0,
    totalItem: 0,
    isLoading:true
}


const cartSlice = createSlice({
    name:'cart',
    initialState
})

// console.log(cartSlice)


export default cartSlice.reducer;