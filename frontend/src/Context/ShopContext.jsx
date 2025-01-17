import React, { createContext, useEffect, useState } from "react";
// import allProduct from "../Components/Assets/all_product";
import CartItem from "../Components/CartItems/CartItem";

export const ShopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {


  const [allProduct , setAllProduct] = useState([])
  const [cartItem, setCartItem] = useState(getDefaultCard());

  useEffect(()=>{
    fetch("http://localhost:8080/allproducts").then((response)=>response
  .json()).then((data)=>setAllProduct(data))

  if(localStorage.getItem('auth-token')){
    fetch('http://localhost:8080/getcart',{
      method:'POST',
      headers: {
        Accept : 'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json' 
    },
    body : ""
  
  }).then((response)=>response.json()).then((data)=>setCartItem(data))
  }
  },[])

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if(localStorage.getItem("auth-token")){
      fetch('http://localhost:8080/addtocart',{
        method:"POST",
        headers:{
          Accept : "application/json" ,
          "auth-token":`${localStorage.getItem('auth-token')}`,
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({"itemId":itemId})
      }).then((response)=>response.json()).then((data)=>{console.log(data)})
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem("auth-token")){
      fetch('http://localhost:8080/removefromcart',{
        method:"POST",
        headers:{
          Accept : "application/json" ,
          "auth-token":`${localStorage.getItem('auth-token')}`,
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({"itemId":itemId})
      }).then((response)=>response.json()).then((data)=>{console.log(data)})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allProduct.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    allProduct,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
