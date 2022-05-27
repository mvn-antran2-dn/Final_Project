import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { IMAGES } from "../../../assets/images";

function DetailProduct() {
  const items = JSON.parse(localStorage.getItem("products") || []);
  const { key } = useParams();
  const item = items.find((product) => product.key.toString() === key);

  return (
    <>
      <NavLink to="/home" className="back-home">
        <img src={IMAGES.imgHome} alt='product-home' /> 
      </NavLink>
      <h3 className='title-update-product'>Detail Product</h3>
      <div className="product-detail">
        <div className="product-detail-img">
          <img src={item.img} alt="product-img" />
        </div>   
        <div className="product-desc">
          <h3>{item.name}</h3>
          <p>
            Price: <span >{item.price} $</span> 
          </p>        
          <p>
            Quantity: <span>{item.quantity}</span>
          </p>
          <p>
            Description: <span>{item.description}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
