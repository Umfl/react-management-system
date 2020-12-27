import React, { Component } from 'react'
import { Layout } from 'antd';
import { Redirect, Switch, Route } from 'react-router-dom'
import LeftNav from '../../components/left-nav/index'
import Header from '../../components/header/index'
import Category from '../category/category';
// import Charts from '../charts/charts';
import LineChart from '../charts/line/line';
import BarChart from '../charts/bar/bar';
import Home from '../home/home';
import Product from '../product/product';
import Role from '../role/role';
import User from '../user/user';

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              {/* <Route path="/charts" component={Charts} /> */}
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/charts/line" component={LineChart} />
              <Route path="/charts/bar" component={BarChart} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
