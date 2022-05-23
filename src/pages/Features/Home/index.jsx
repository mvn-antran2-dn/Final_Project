import React from "react";
import { Layout, Breadcrumb } from 'antd';
import { SiderBar } from "../../../components/Layout";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Product from "../Product";
import AddProducts from "../AddProduct";
import UpdateProducts from "../UpdateProduct";


const { Content} = Layout;

export default function Home() {
  return (
    <div className="page-main container">
      <Layout className="layout"
        style={{
          padding: '0 24px 24px',
        }}
      >
        <SiderBar />
        <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route exact path="/home">
              <Product />
            </Route>
            <Route  path="/home/create">
              <AddProducts />
            </Route>
            <Route  path="/home/update">
              <UpdateProducts />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}
