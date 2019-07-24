import React from "react";
import { Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import HookWithImmer from "./pages/immutable/HookWithImmer";
import ComponentWithImmer from "./pages/immutable/ComponentWithImmer";

import "./App.css";

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <div style={{ width: 256 }}>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="pie-chart" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Icon type="desktop" />
                  <span>About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/users">
                  <Icon type="inbox" />
                  <span>Users</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Immutable</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to="/hookWithImmer">Hook with immer</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/componentWithImmer">Component with immer</Link>
                </Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
          <div className="app-content">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/hookWithImmer" component={HookWithImmer} />
            <Route path="/componentWithImmer" component={ComponentWithImmer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
