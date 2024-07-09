import React ,{useState}from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"

function AddProduct() {
const [image,setImage]=useState(false)
const [productDetails,setProductDetails] = useState({
  name:"",
  image : "",
  category : "women",
  new_price : "",
  old_price : ""
})

const imageHandler =(e)=>{
  setImage(e.target.files[0])
}

const changeHandler = (e) =>{
  setProductDetails({...productDetails,[e.target.name]:e.target.value})
}

const addProduct = async ()=>{
  let responseData;
  let product = productDetails;

  let formData = new FormData();
  formData.append('product', image);

  await fetch('http://localhost:8080/upload', {
      method: 'POST',
      headers: {
          Accept: 'application/json'
      },
      body: formData
  }).then((res) => {
      return res.json();
  }).then((data) => {
      responseData = data;
  });

  if(responseData.success){
      product.image = responseData.imageUrl;
      await fetch('http://localhost:8080/addproduct',{
        method : "POST",
        headers : {
          Accept : "application/json",
          "content-Type"  : "application/json"
        },
        body : JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product added"):alert("product  not added")

      })
  }
};


  return (
    <div className='addproduct'>
      <div className="addProduct-itemfield">
        <p>Product Title</p>
        <input  value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="type hear" />
      </div>
      <div className="addProduct-price">
        <div className="addProduct-itemfield">
          <p>Price</p>
        <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="type hear" />
        </div>
        <div className="addProduct-itemfield">
          <p>Offer Price</p>
        <input type="text" name="new_price" value={productDetails.new_price} onChange={changeHandler} placeholder="type hear" />
        </div>
      </div>
      <div className="addProduct-itemfield">
        <p>Product Category</p>
        <select name="category" value={productDetails.category} onChange={changeHandler} className="addProduct-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addProduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addProduct-thumbnail-image" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={addProduct} className="addProduct-button">Add</button>
    </div>
  )
}

export default AddProduct