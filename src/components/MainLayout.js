import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import {
  FaBlog,
  FaBloggerB,
  FaClipboardList,
  FaMicroblog,
} from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { SiBloglovin } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-5" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-5" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-5" />,
              label: "Catalog",
              children: [
                {
                  key: "Product",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: " Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "category",
                  icon: <TbBrandAdobe className="fs-5" />,
                  label: "Brand",
                },

                {
                  key: "category",
                  icon: <TbBrandAdobe className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Colors",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-5" />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <FaBloggerB className="fs-5" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <FaBlog className="fs-5" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaMicroblog className="fs-5" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlogger2 className="fs-5" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <SiBloglovin className="fs-5" />,
                  label: "Blog Category List",
                },
              ],
            },
          ]}
          <h4>ds</h4>
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "white",
            borderRadius: "3px",
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
