import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER, UPDATE_USER } from "./queries.js";

const validationSchema = yup.object({
  username: yup.string().required().email().label("User name"),
  email: yup
    .string()
    .email("Email address format")
    .required()
    .label("Email Address"),
  address: yup.string().required().label("Street Address"),
});
//Add state
export const LoginForm = ({ id, onClose }) => {
  const navigate = useNavigate();
  const mutation = id === undefined ? ADD_USER : UPDATE_USER;

  const [addUser, { loading, error }] = useMutation(mutation, {
    onCompleted: () => {
      if (onClose !== undefined) {
        onClose(); //check if tab is open with IDs
      }
    },
    // refetchQueries: ["GET_SESSION", "GET_USERS"],
  });
  //Upon completion reroute to front page
  const {
    handleReset,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      address: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      console.log(`User ID: ${id}`);

      const { name, address, email } = values;
      const input = { name, address, email };
      await addUser({
        variables: {
          id,
          input,
        },
      });
    },
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            name="username"
            label="Username (email)"
            placeholder="joe@example.com"
            autoComplete="email"
            value={values.username}
            error={!!errors.username}
            helperText={errors.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            name="address"
            label="Enter address"
            placeholder="400 Park Ave."
            autoComplete="address"
            value={values.address}
            error={!!errors.address}
            helperText={errors.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="***************"
            value={values.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography color="error">Error! {error.message}</Typography>
          </Grid>
        )}
        <Grid item>
          <Button type="submit" disabled={loading}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
