import UserAuth from "../../../hooks/useAuth";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getInfoUser } from "../../../stores/userSlice";
import DataProduct from "../../Features/Data";

export default function Login() {
  const { login } = UserAuth();
  const dispatch = useDispatch();
  const dataAdmin = [
    {
      username: "an.tran@monstar-lab.com",
      password: "anpro123",
    },
    {
      username: "an.tran2@monstar-lab.com",
      password: "anpro3455",
    }
  ];

  const onFinish = (value) => {
    const findInfo = dataAdmin.find((item) => {
      return item.username === value.username && item.password === value.password;
    });
    if (!value.username || !value.password) {
      toast.error("Missing Params!");
      return;
    } else if (findInfo === undefined) {
      toast.error("Incorrect email or password!");
      return;
    } else {
      toast.success("Logged in successfully");
      login(value.username, value.password);
      dispatch(getInfoUser(findInfo));
    }
  };
  return (
    
    <div className="page-login container">
      <div className="login-img">
        <img src='https://congtrinhnhaviet.vn/upload/images/thiet-ke-showroom-xe-may-tai-ha-noi-10-05.jpg'  alt='login-img'/>
      </div>
      <DataProduct />
      <div className="login-content">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
        <h1 className="title-login">Login Admin</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a  className="login-form-forgot" href=".">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button  htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

