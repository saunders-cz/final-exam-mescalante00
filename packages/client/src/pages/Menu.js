import React from "react";
import { Grid } from "@mui/material";
import { CategoryList } from "../modules/menu/CategoryList.js";

export const Menu = () => {
  return (
    <>
      <Grid container spacing={3} direction="column">
        <Grid item>Menu</Grid>
        <Grid item>
          <CategoryList />
        </Grid>
      </Grid>
    </>
  );
};
