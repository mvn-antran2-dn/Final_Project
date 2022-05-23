import React from "react";
import { Layout, Menu } from 'antd';
import {  HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
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
    <NavLink activeClassName="active" to="/home">
      <img className="action-siderbar-list" src={IMAGES.imgHome} alt="home" /> 
    </NavLink>
  ),
  getItem(
    "ProductsList",
    "2",
    <NavLink activeClassName="active" to="/home">
       <img className="action-siderbar-list" src={IMAGES.imgProdList} alt="product-list" /> 
    </NavLink>,
    [
      getItem(
        <NavLink to="/home/create">
          <div className="action-siderbar-item">
            <img  src={IMAGES.imgCreate} alt="create" /> 
            <p className="siderbar-span">Create Product</p> 
          </div>{" "}
        </NavLink>,
        "3"
      ),
    ]
  )
];

export default function SiderBar() {
  return (
    <div className="Siderbar">
        <Sider 
          width={200} className="site-layout-background" >
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
