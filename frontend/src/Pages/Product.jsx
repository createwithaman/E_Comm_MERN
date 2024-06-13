import React   from 'react';

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext';
import Breadcrums from "../Components/Breadcrums/Breadcrum.jsx"
import ProductDisply from '../Components/ProductDisplay/ProductDisply.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx';

const Product =()=> { 
  const { allProduct } = useContext(ShopContext);

  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisply product={product}/>
      <DescriptionBox />
      <RelatedProduct/>
    </div>
  );
}

export default Product;


