import React, { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Categories from "../Sesion07/Categories";
import Customers from "../Sesion07/Customers";
import Employees from "../Sesion07/Employees";
import Products from "../Sesion07/Product";
import Suppliers from "../Sesion07/Suppliers";
import Orders from "../Sesion07/Orders";
import Login from "./Login";
import Home from "./Home";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = {
  key: React.Key;
  icon?: React.ReactNode;
  to?: string;
  label: React.ReactNode;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  to?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    to,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", null, "/home"),
  getItem("Categories", "3", null, "/categories"),
  getItem("Customers", "4", null, "/customers"),
  getItem("Employees", "5", null, "/employees"),
  getItem("Products", "6", null, "/products"),
  getItem("Suppliers", "7", null, "/suppliers"),
  getItem("Orders", "8", null, "/orders"),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item?.key} icon={item?.icon}>
              {item ? (
                item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  item.label
                )
              ) : null}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/products" element={<Products />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
              {/* Add other routes for different components as needed */}
            </Routes>
            <div> </div>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
