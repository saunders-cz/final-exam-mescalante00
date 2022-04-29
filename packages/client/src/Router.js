import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./pages/User";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Menu } from "./pages/Menu";

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
          <Route path="/admin" element={<User />} />
          <Route path="meals/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
