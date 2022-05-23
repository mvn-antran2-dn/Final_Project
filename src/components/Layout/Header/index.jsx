import { Button, Dropdown, Layout, Menu, Space } from 'antd';
import { DownOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';

const { Header } = Layout;
export default function HeaderCP() {
  function handleMenuClick(e) {
    // message.info('Click on menu item.'); 
  }
  const menu = (
    <Menu
      className='item-admin'
      onClick={handleMenuClick}
      items={[
        {
          label: (<NavLink activeClassName="active" to="/account" className="account-user">
                    Account Management
                  </NavLink>),
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: ( <NavLink activeClassName="active" to="/" className="login">
                       Logout
                    </NavLink>),
          key: '2',
          icon: <LoginOutlined />,
        }
      ]}
    />
  );
  return (
    <Header className="page-header">
      <NavLink activeClassName="active" to="/home" className="logo">
        <img src='https://www.honda.com.vn/images/logo.svg' alt='' />
      </NavLink>
      
      <Dropdown overlay={menu} className='content-admin'>
        <Button>
          <Space>
            ADMIN
            <DownOutlined />
          </Space>
        </Button>
    </Dropdown>  
    </Header>
  )
}
