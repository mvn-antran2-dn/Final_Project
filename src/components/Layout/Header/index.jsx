import { Button, Dropdown, Layout, Menu, Space } from 'antd';
import { DownOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserAuth from '../../../hooks/useAuth';
import { IMAGES } from '../../../assets/images';


export default function HeaderCP() {
  const { logout } = UserAuth();
  const { Header } = Layout;
  const username = useSelector((state) => state.user.value);
  const user = JSON.parse(localStorage.getItem("user"));
  
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
          icon:  <img className="item-admin-img" src={IMAGES.imgAdmin2} alt="account" /> ,
        },
        {
          label: ( <NavLink activeClassName="active" to="/" className="logout" onClick={() => logout()}>
                      Logout
                    </NavLink>),
          key: '2',
          icon: <img  src={IMAGES.imgLogout} alt="logout" className='item-admin-img'/>,
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
          {username !== "" ? (
              <span>
                {username?.username ? username.username : user?.username}
              </span>
            ) : (
              <span></span>
            )}
            <DownOutlined />
          </Space>
        </Button>
    </Dropdown>  
    </Header>
  )
}
