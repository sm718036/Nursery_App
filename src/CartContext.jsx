import { createContext, useState, useEffect } from "react";

const CartContext = createContext();


function CartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  function addToCart(item){
    setCart((prevData)=>{
      return [...prevData, item]
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
