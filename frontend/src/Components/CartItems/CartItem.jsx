import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from "../Assets/cart_cross_icon.png"

function CartItem() {
    const {getTotalCartAmount,allProduct,cartItem , removeFromCart } = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <div className="cartItem-formate-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((e)=>{
            if(cartItem[e.id]>0){
                return <div>
                <div className="cartItem-formate cartItem-formate-main">
                    <img className='cartIcon-productIcon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItem-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className='cartItem-removeIcon' src={removeIcon} onClick={()=>{
                        removeFromCart(e.id)
                    }} alt="" />
                </div>
            </div>
        
            }

            return null
        })}
        <div className="cartItem-down">
            <div className="cartItem-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cart-item-totalItem">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount() || 0}</p>
                    </div>
                    <hr />
                    <div className="cart-item-totalItem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-item-totalItem">
                        <h3>Total </h3>
                        <h3>${getTotalCartAmount() || 0}</h3>
                    </div>
                </div>
                <button>Proceed To CheckOut</button>
            </div>
            <div className="cartItem-promoCode">
                <p>If you Have promo Code Enter Hear</p>
                <div className="cartItem-promoBox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default CartItem