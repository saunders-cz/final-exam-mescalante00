import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";

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
          <Route path="/admin" element={<Admin />} />
          <Route path="meals/:id" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
