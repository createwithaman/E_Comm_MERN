import React, { createContext, useState } from "react";
import allProduct from "../Components/Assets/all_product";
import CartItem from "../Components/CartItems/CartItem";

export const ShopContext = createContext(null);

const getDefaultCard = () =>{
  let cart = {}
  for (let index = 0; index < allProduct.length+1; index++) {
    cart[index] =0
    
  }

  return cart
}

const ShopContextProvider = ({ children }) => {
  const [cartItem , setCartItem] = useState(getDefaultCard())
  
  const addToCart = (itemId) =>{
    setCartItem((prev)=>({...prev , [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) =>{
      setCartItem((prev)=>({...prev , [itemId]:prev[itemId]-1}))
      }
      

      const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in CartItem){
          if(cartItem[item]>0){
            let itemInfo = allProduct.find((product)=>{product.id===Number(item)})
            totalAmount += itemInfo.new_price * cartItem[item]
          }
          return totalAmount
        }
      }

      const getTotalCartItem = ()=>{
        let totalItem = 0
        for(const item in cartItem){
          if(cartItem[item]>0){
            totalItem += cartItem[item]
          }
          }
          return totalItem
      }

      const contextValue = {getTotalCartItem,getTotalCartAmount, allProduct , cartItem , addToCart , removeFromCart};
  

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};


export default ShopContextProvider;
