import React from 'react';
import { Form, Input, InputNumber, Button} from 'antd';

export default function UpdateProducts(props) { 
  const onUpdate=props.onUpdate;
  const productLink=props.productLink;
  const handleImageChange=props.handleImageChange; 
 return (
    <Form
      form={props.form}
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onUpdate}
      autoComplete="off"
     
    >
      <Form.Item
        label="Name"
        name="name"
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
        label="Price"
        name="price"
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
        name="quantity"
        label="Quantity"
        rules={[
          {
            required: true,
            type: 'number',
            message: "Please enter product price",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
         <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Image"
        name="img"
      >
        <Input
          type="file"
          value={productLink}
          onChange={handleImageChange}
        />
      </Form.Item>
      <Form.Item
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
  );
};

