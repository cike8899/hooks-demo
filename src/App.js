import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import HookWithImmer from "./pages/immutable/HookWithImmer";
import ComponentWithImmer from "./pages/immutable/ComponentWithImmer";
import About from "./pages/About";
import CascaderDemo from "pages/react-component/CascaderDemo";
import UseState from "pages/hooks/UseState";
import SetStateDemo from "pages/baseApi/SetStateDemo";
import ImmutagenLib from "pages/immutable/ImmutagenLib";

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
                <Menu.Item key="7">
                  <Link to="/immutagen">immutable generator</Link>
                </Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>react-component</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  <Link to="/cascaderDemo">Cascader</Link>
                </Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>hooks</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  <Link to="/useState">useState</Link>
                </Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>base api</span>
                  </span>
                }
              >
                <Menu.Item key="21">
                  <Link to="/setStateDemo">setState</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="app-content">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/hookWithImmer" component={HookWithImmer} />
            <Route path="/componentWithImmer" component={ComponentWithImmer} />
            <Route path="/cascaderDemo" component={CascaderDemo} />
            <Route path="/useState" component={UseState} />
            <Route path="/setStateDemo" component={SetStateDemo} />
            <Route path="/immutagen" component={ImmutagenLib} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
