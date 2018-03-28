import React from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

import { Alert, Breadcrumb, Layout, Menu } from 'antd';

// import Home from '..//Home/Home';
import About from '../About/About';

const { Header, Content, Footer } = Layout;

const Users = () => (
  <div>
    <ul className="users">
      <li>
        <Link to="/users/1">User1</Link>：<Link to="/users/1/detail">Users</Link>
      </li>
      <li>
        <Link to="/users/2">User2</Link>：<Link to="/users/2/detail">Users</Link>
      </li>
    </ul>
  </div>
);

const breadcrumbNameMap = {
  '/users': 'Users',
  '/users/1': '1',
  '/users/2': '2',
  '/users/1/detail': 'Detail',
  '/users/2/detail': 'Detail',
};

const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </div>
      <Switch>
        <Route path="/users" component={Users} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
});

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
        <main>
          <Router>
            <Home />
          </Router>
        </main>
      </div>
    </Content>
    <Footer style={{textAlign: 'center'}}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;