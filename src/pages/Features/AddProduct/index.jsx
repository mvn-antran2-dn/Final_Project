import React from 'react';
import { Form, Input, InputNumber, Button} from 'antd';

export default function AddProducts(props) { 
  const onFinish = props.onFinish;
  const onFinishFailed = props.onFinishFailed;
  const handleFileChange=props.handleFileChange;
  
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };  
 return (
   <div className='section-create-product'>
      <div className='container create-product'>
        <h3 className='title-create-product'>Create Product</h3>
        <Form className='form-add-product' 
          {...layout} 
          name="nest-messages" 
          validateMessages={props.validateMessages}
          onFinish={props.onFinish}
          onFinishFailed={props.onFinishFailed}
          autoComplete="off">
          <Form.Item
            name={[ 'key']}
            label="ID"
            rules={[
              {
                required: true,
                type: 'number',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={[ 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={[ 'quantity']}
            label="Quantity"
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={[ 'price']}
            label="Price"
            rules={[
              {
                required: true,
                type: 'number',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={[ 'description']} label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name={[ 'img']} label="Images" 
            rules={[
              {
                required: true,
                message: "Please add product image",
                },
              ]} >
                <Input type="file" onChange={props.handleFileChange} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
   </div>  
  );
}
