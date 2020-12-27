import React, { Component } from 'react'
import './index.less';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/result@2.png';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


export default class LefNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <Menu
          defaultSelectedKeys={['/home']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        // inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/home" icon={<PieChartOutlined />}>
            <Link to="/home">
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="/category" icon={<PieChartOutlined />}>
            <Link to="/category">
              分类
            </Link>
          </Menu.Item>
          <Menu.Item key="/product" icon={<PieChartOutlined />}>
            <Link to="/product">
              产品
            </Link>
          </Menu.Item>
          <Menu.Item key="/role" icon={<PieChartOutlined />}>
            <Link to="/role">
              角色
            </Link>
          </Menu.Item>
          <Menu.Item key="/user" icon={<PieChartOutlined />}>
            <Link to="/user">
              用户
            </Link>
          </Menu.Item>
          <SubMenu key="/charts" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="/charts/line">
            <Link to="/charts/line">
              线状图
            </Link>
            </Menu.Item>
            <Menu.Item key="/charts/bar">
            <Link to="/charts/bar">
              柱状图
            </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
