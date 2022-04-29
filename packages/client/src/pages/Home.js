import React from "react";
import { Grid, Typography } from "@mui/material";
export const Home = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h1">Carmen and Colomba</Typography>
        </Grid>
        <Grid item>
          <img src="img/header.jpg" alt="header image" />
        </Grid>
        <Grid item>
          <Typography variant="h2">User 1</Typography>
          <img src="img/user.jpg" alt="user" />
        </Grid>
        <Grid item>
          <Typography variant="h2">User 1</Typography>
          <img src="img/user.jpg" alt="user" />
        </Grid>
        <Grid item>
          <Typography variant="h2">User 1</Typography>
          <img src="img/user.jpg" alt="user" />
        </Grid>
      </Grid>
    </>
  );
};
