/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Login from "../containers/Login";
import Home from "../containers/Home";
import Products from "../containers/Products";
import ProductsDetails from "../containers/ProductsDetails";
import Register from "../containers/Register";
import About from "../containers/About";
import Category from "../containers/Category";
import Password from "../containers/Password";
import Cart from "../containers/Cart";
import Contact from "../containers/Contact";
import Feed from "../containers/Feed";
import Policy from "../containers/Policy";
import NewPassword from "../containers/NewPassword";
import OrderHistory from "../containers/OrderHistory";
import UpdateProfile from "../containers/UpdateProfile";
import Success from "../containers/Success";
import MyProfile from "../containers/MyProfile";

import Admin from "../containers/Admin/Admin";
import ProductsAdmin from "../containers/Admin/ProductsAdmin";
import OrdersAdmin from "../containers/Admin/OrdersAdmin";
import UsersAdmin from "../containers/Admin/UsersAdmin";
import AdminProducts from "../containers/Admin/AdminProducts";
import { Update } from "../containers/Admin/Update";
import { UserOrderInfo } from "../containers/Admin/UserOrderInfo";

function routing() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LandingPage />} exact />
        <Route path={"/landing"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/productsList/:catagory"} element={<Products />} />
        <Route path={"/productsLists"} element={<Products />} />
        <Route path={"/productsDetails/:id"} element={<ProductsDetails />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/password"} element={<Password />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/feed"} element={<Feed />} />
        <Route path={"/policy"} element={<Policy />} />
        <Route path={"/newPassword"} element={<NewPassword />} />
        <Route path={"/updateprofile"} element={<UpdateProfile />} />
        <Route path={"/orderhistory"} element={<OrderHistory />} />
        <Route path={"/success"} element={<Success />} />
        <Route path={"/myprofile"} element={<MyProfile />} />

        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/productsadmin"} element={<ProductsAdmin />} />
        <Route path={"/update/edit/:id"} element={<Update />} />
        <Route path={"/adminproducts"} element={<AdminProducts />} />
        <Route path={"/ordersadmin"} element={<OrdersAdmin />} />
        <Route path={"/usersadmin"} element={<UsersAdmin />} />
        <Route path={"/userorderinfo/:id"} element={<UserOrderInfo />} /> 
      </Routes>
    </div>
  );
}

export default routing;
