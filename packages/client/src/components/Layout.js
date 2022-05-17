import { Container, Grid } from "@mui/material";
import React from "react";
import { Navigation } from "./Navigation.js";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};
