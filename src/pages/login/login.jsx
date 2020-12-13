import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';


export default class login extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h1>奥特的后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登陆</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: '请输入用户名!' },
                { min: 4, message: '最少需要输入4位用户名!' },
                { max: 12, message: '最多只能输入12位用户名!' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是数字，字母，下划线组成!' },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, whitespace: true, message: '请输入密码!' },
                { min: 4, message: '最少需要输入4位密码!' },
                { max: 12, message: '最多只能输入12位密码!' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是数字，字母，下划线组成!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
