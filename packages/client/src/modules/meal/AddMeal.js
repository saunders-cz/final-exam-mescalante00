import React from "react";
import { MealForm } from "./MealForm";

export const AddMeal = ({ onClose }) => {
  return (
    <MealForm
      initialValues={{
        title: "",
        description: "",
        imgsrc: "",
        price: 0,
        categoryId: "1",
      }}
      onClose={onClose}
    />
  );
};
