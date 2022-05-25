import { Button, Form, Input, InputNumber } from "antd";
import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IMAGES } from "../../../assets/images";

function ProductEditing() {
  // const dataSources = JSON.parse(localStorage.getItem("products")) || [];
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
  // console.log(dataSource.map(item => item.name = "ahsdjhagsjdh"));

  const onFinish = (values) => {
    dataSource.map(item => (
      item.key === parseInt(key) && (
      item.name = values.name,
      item.price = values.price,
      item.description = values.description,
      item.quantity = values.quantity,
      item.img = productUrl ? productUrl : newData.img
      )
    ))
    console.log(dataSource);

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
          <Form
            className='form-update-product'
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              initialValue={newData.name}
              rules={[
                {
                  required: true,
                  message: "Please enter product name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            
              label="Image"
              name="image"
              rules={[
                {
                  message: "Please add product image",
                },
              ]}
            >
              <Input
              
                type="file"
                value={newData.productLink}
                onChange={handleImageChange}
              />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              initialValue={newData.price}
              rules={[
                {
                  required: true,
                  message: "Please enter product price",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              initialValue={newData.quantity}
              rules={[
                {
                  required: true,
                  message: "Please enter product price",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              initialValue={newData.description}
              rules={[
                {
                  required: true,
                  message: "Please enter product description",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="button"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ProductEditing;
