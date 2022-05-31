import React from "react";
import { Layout, Menu } from 'antd';
import { NavLink } from "react-router-dom";
import { IMAGES } from "../../../assets/images";

const {  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
};
const items = [
  getItem(
    "Home",
    "1",
    <NavLink activeClassName="active" to="/product">
      <img className="action-siderbar-list" src={IMAGES.imgHome} alt="home" /> 
    </NavLink>
  ),
  getItem(
    "ProductsList",
    "2",
    <NavLink activeClassName="active" to="/product">
       <img className="action-siderbar-list" src={IMAGES.imgProdList} alt="product-list" /> 
    </NavLink>
  ),
  getItem(
    "Account Management",
    "3",
    <NavLink activeClassName="active" to="/account">
       <img className="action-siderbar-list" src={IMAGES.imgAdmin2} alt="account" /> 
    </NavLink>
  ),
  getItem(
    "Banner Management",
    "4",
    <NavLink activeClassName="active" to="/product">
       <img className="action-siderbar-list" src={IMAGES.imgBanner} alt="" /> 
    </NavLink>
  ),
  getItem(
    "User Management",
    "5",
    <NavLink activeClassName="active" to="/product">
       <img className="action-siderbar-list" src={IMAGES.imgUser} alt="" /> 
    </NavLink>
  ),
  getItem(
    "Logout",
    "6",
    <NavLink activeClassName="active" to="/" className="logout"  >
      <img  src={IMAGES.imgLogout} alt="logout" className='action-siderbar-list logout' />
    </NavLink>
  ),
];

export default function SiderBar() {
  return (
    <div className="Siderbar">
        <Sider 
          width={250} className="site-layout-background" >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items}
        />
      </Sider>
    </div>
  );
}
