import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import crossIcon from "../../assets/cross_icon.png"

function ListProduct() {

    const [allProducts , setAllProducts] = useState([])

    const fetchInfo = async()=>{
      await fetch("http://localhost:8080/allproducts").then((res)=>
        res.json()
      ).then((data)=>{setAllProducts(data)})
    }

    useEffect(()=>{
      fetchInfo()
    },[])

    const removeProduct = async(id)=>{
      await fetch("http://localhost:8080/removeproduct",{
        method:"POST",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({id:id})
      })
      await fetchInfo()
    }


  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listProduct-formateName menu">
        <p>Product</p>
        <p className='title'>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p className='category'>Category</p>
        <p>Remove</p>
      </div>
      <div className="listProduct-allProduct">
        <hr />
      {allProducts.map((product,index)=>{
        return <><div key={index} className="listProduct-formateName listProduct-formate">
            <img src={product.image} alt="" className="listProduct-productIcon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>${product.category}</p>
            <img onClick={()=>{removeProduct(product.id)}} src={crossIcon} alt="" className="listProduct-removeIcon" />
        </div>
        <hr />
        </>
      })}
      </div>

    </div>
  )
}

export default ListProduct