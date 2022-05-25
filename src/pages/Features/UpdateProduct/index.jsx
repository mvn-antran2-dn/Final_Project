import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IMAGES } from "../../../assets/images";
import ProductForm from "../../../components/modules/ProductForm";

function ProductEditing() {
  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [productUrl, setProductUrl] = useState("");
  const { key } = useParams();
  let history = useHistory();
  const newData = dataSource.find((item) => item.key === parseInt(key));

  const handleImageChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setProductUrl(reader.result);
    };
  };

  const handleOnUpdate = (values) => {
    dataSource.map(item => (
      item.key === parseInt(key) && (
      item.name = values.name,
      item.price = values.price,
      item.description = values.description,
      item.quantity = values.quantity,
      item.img = productUrl ? productUrl : newData.img
      )
    ))
    localStorage.setItem("products", JSON.stringify(dataSource));
    setDataSource(JSON.parse(localStorage.getItem("products")));
    toast.success('update success');
    history.push("/home");
  };
  return (
    <>
     <div className='section-update-product'>
      <div className='container update-product'>
        <NavLink to="/home" className="back-home">
          <img src={IMAGES.imgHome} alt='product-home' /> 
        </NavLink>
        <h3 className='title-update-product'>Update Product</h3>   
        <ProductForm
          onFinish={handleOnUpdate}
          nameBtn="Update"
          onChange={handleImageChange}
          newData={newData}
          formName="form-update-product"
        />
        </div>
      </div>
    </>
  );
}

export default ProductEditing;
