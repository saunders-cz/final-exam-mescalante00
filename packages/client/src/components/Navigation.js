import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/home/">Home</Link>
        <Link to="/admin/">Admin</Link>
        <Link to="/menu/">Menu</Link>
      </nav>
    </>
  );
};
