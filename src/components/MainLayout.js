import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt, BiCoinStack } from "react-icons/bi";
import {
  FaBlog,
  FaBloggerB,
  FaClipboardList,
  FaMicroblog,
} from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { ImBlogger2 } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { RiQuestionFill } from "react-icons/ri";
import { SiBloglovin } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">PE</span>
            <span className="lg-logo">PandaE</span>
          </h2>
        </div>
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
              icon: <BiCoinStack className="fs-5" />,
              label: "Catalog",
              children: [
                {
                  key: "Product",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: " Add Product",
                },
                {
                  key: "product-list",
                  icon: <HiClipboardList className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandAdobe className="fs-5" />,
                  label: "Brand",
                },

                {
                  key: "brand-list",
                  icon: <HiClipboardList className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <HiClipboardList className="fs-5" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Colors",
                },
                {
                  key: "list-color",
                  icon: <HiClipboardList className="fs-5" />,
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
                  key: "blog-add",
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
            {
              key: "enquries",
              icon: <RiQuestionFill className="fs-5" />,
              label: "Enquries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="justify-content-between d-flex ps-3 pe-5"
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
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning position-absolute rounded-circle p-1">
                3
              </span>
            </div>
            <div
              className="d-flex  align-items-center dropdown"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="me-0">
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                  className="img-fluid"
                  src="/images/user.png"
                  alt=""
                />
              </div>
              <div className="">
                <h5 className="mb-0">Naimur</h5>
                <p className="mb-0">rnaimur313@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                    className="dropdown-item "
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                    className="dropdown-item"
                  >
                    Sign Out
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "white",
            borderRadius: "3px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
