import React from "react";
import { Layout, Breadcrumb } from 'antd';
import { SiderBar } from "../../../components/Layout";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Product from "../Product";
import UpdateProducts from "../UpdateProduct";
import DetailProduct from "../DetailProduct";


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
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/product/:key">
              <DetailProduct />
            </Route>
            <Route  path="/product/:key/update">
              <UpdateProducts />
            </Route>           
          </Switch>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}
