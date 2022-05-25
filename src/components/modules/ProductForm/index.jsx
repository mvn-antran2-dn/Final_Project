import { Button, Form, Input, InputNumber } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

function ProductForm({ onFinish, nameBtn, onChange, newData, formName }) {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
        className={formName}
      >
        {/* <Form.Item
          label="ID"
          name="key"
          initialValue={newData.key}
          rules={[
            {
              required: true,
              message: "Please enter product ID",
            },
          ]}
        >
          <Input />
        </Form.Item> */}
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
        {nameBtn === "Submit" && (
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please add product image",
              },
            ]}
          >
            <Input className="input-file" type="file" onChange={onChange} />
          </Form.Item>
        )}
        {nameBtn === "Update" && (
          <Form.Item label="Image" name="image">
            <Input className="input-file" type="file" onChange={onChange} />
          </Form.Item>
        )}
        <Form.Item
          label="Price"
          name="price"
          initialValue={newData.price}
          rules={[
            {
              required: true,
              message: "Please enter product price",
            }
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
            {
              validator: (_, value) =>
                value > 0
                  ? Promise.resolve()
                  : Promise.reject("Value must be a positive number"),
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
            }
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {nameBtn}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ProductForm;
