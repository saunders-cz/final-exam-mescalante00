import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Order } from "./pages/Order";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home">
            <Route index element={<Home />} />
          </Route>
          <Route path="/menu" element={<Menu />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="meals/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
