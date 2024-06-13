import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

function ProductDisply(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className="container">
    <div className='product-display'>
        <div className="productDisplayLeft">
            <div className="productDisplayImageList">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplayImage">
                <img className='productDisplayImageMain' src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplayRight">
            <h1>{product.name}</h1>
            <div className="productDisplayRightStar">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="prodcutDisplayRightPrices">
                <div className="priceOld">
                    ${product.old_price}
                </div>
                <div className="priceNew">
                    ${product.new_price}
                </div>
            </div>
            <div className="productDisplayRightDescription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quia nulla molestias saepe quae eveniet quas amet possimus beatae pariatur ipsum similique doloremque, illum ullam et iure rerum facilis ex.
            </div>
            <div className="productDisplayRightSize">
                <h1>Select Size</h1>
                <div className="productDisplaySizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='button' onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className="productDisplayCategory">
                <span>Category : </span>Women , T-Shirt , Crop-Top 
            </p>
            <p className="productDisplayCategory">
                <span>Tags : </span>Modern , Latest 
            </p>
        </div>
    </div>
    </div>
  )
}

export default ProductDisply