import React, { useContext } from 'react';
import "./Css/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropDown from "../Components/Assets/dropdown_icon.png"; // Correct the import path
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  const { allProduct } = useContext(ShopContext); // Use allProduct from context

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>
            Showing 1-12 
          </span> out of 36 products
        </p>
        <div className='shop-category-sort'>
          Sort by <img src={dropDown} alt="" />
        </div>
      </div>

      <div className="shop-category-products">
        {allProduct.map((item, i) => {
          if (props.category === item.category) { // Use strict equality check
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
