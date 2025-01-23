import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const isalreadyPreset = state.cart.find(item=>item.id===action.payload.id)
      if(isalreadyPreset === undefined){
        state.cart.push(action.payload)
      } else {
        isalreadyPreset.quantity += 1
      }
    },
    removeFromCart: (state, action) => {
      const itemToDelete = state.cart.find(item => item.id === action.payload.id);
      if(itemToDelete) {
        const indexOfToRemove = state.cart.indexOf(action.payload)
        state.cart.splice(indexOfToRemove, 1)
      }
    },
    increaseQuantity: (state, action) => {
      const itemToIncreaseQuantity = state.cart.find(item => item.id === action.payload);
      if(itemToIncreaseQuantity) {
        itemToIncreaseQuantity.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecreaseQuantity = state.cart.find(item => item.id === action.payload);
      if(itemToDecreaseQuantity) {
        itemToDecreaseQuantity.quantity -= 1;
        if(itemToDecreaseQuantity.quantity === 0) {
          const indexOfToRemove = state.cart.indexOf(action.payload)
          state.cart.splice(indexOfToRemove, 1)
        }
      }
    },
    checkout: (state)=>{
      if(state.cart.length === 0){
        alert("Your cart is empty. Please add something to the cart.")
        return
      }
      const randomNumber = Math.floor(Math.random() * 256000)
      alert(`Checkout Successful.Thank you for shopping with us. \nYour order id is #${randomNumber}.`)
      state.cart = []
      window.location.replace("/")
    }
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = cartSlice.actions;

export default cartSlice.reducer;
