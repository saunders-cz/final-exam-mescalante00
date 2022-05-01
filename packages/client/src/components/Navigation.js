import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/home/">Home</Link>
        <Link to="/user/">User</Link>
        <Link to="/menu/">Menu</Link>
        <Link to="/order/">Order</Link>
        <Link to="/user/">User</Link>
      </nav>
    </>
  );
};
