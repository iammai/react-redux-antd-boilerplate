import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import Home from '..//Home/Home';
import About from '../About/About';
import BreadcrumbHeader from "../../components/BreadcrumbHeader";

const { Header, Content, Footer } = Layout;

const Users = () => (
  <div>
    <ul className="users">
      <li>
        <Link to="/users/1">User1</Link>：<Link to="/users/1/detail">Detail</Link>
      </li>
      <li>
        <Link to="/users/2">User2</Link>：<Link to="/users/2/detail">Detail</Link>
      </li>
    </ul>
  </div>
);

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo"/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/users">Users</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about-us">About</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{padding: '0 50px'}}>
      <div style={{background: '#fff', padding: 24, minHeight: 280}}>
        <BreadcrumbHeader></BreadcrumbHeader>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    </Content>
    <Footer style={{textAlign: 'center'}}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;