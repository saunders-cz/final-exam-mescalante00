import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login/">Login</Link>
        <Link to="/menu/">Menu</Link>
        <Link to="/admin/">Admin</Link>
      </nav>
    </>
  );
};
