import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const MealList = ({ meals }) => {
  return (
    <Grid container direction="column" spacing={2}>
      {meals.map((meal, i) => (
        <Grid item xs={4} key={i}>
          <Card>
            <CardMedia
              heigh="300"
              component="img"
              src={meal.imgsrc}
              alt={meal.title}
            />
            <CardContent>
              <Typography variant="h5">{meal.title}</Typography>
              <Typography>{meal.description}</Typography>
              <Typography>${meal.price}</Typography>
            </CardContent>
            {/* 
              TODO: Add functionality
        
             */}
            <CardActions>
              <Button>Add Item</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
