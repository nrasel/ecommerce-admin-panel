import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import BlogCatList from "./pages/BlogCatList";
import BlogList from "./pages/BlogList";
import BrandList from "./pages/BrandList";
import CategoryList from "./pages/CategoryList";
import ColorList from "./pages/ColorList";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Enquries from "./pages/Enquries";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import ProductList from "./pages/ProductList";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-pass" element={<ResetPassword />} />
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquries" element={<Enquries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="brand-list" element={<BrandList />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
