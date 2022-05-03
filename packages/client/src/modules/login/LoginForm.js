import { Button, Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { MailSwitch } from "./MailSwitch";
import { ADD_USER, UPDATE_USER } from "./mutations";
import { useMutation } from "@apollo/client";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  address: "",
};

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required()
    .label("Email Address"),
  address: yup.string().required().label("Street Address"),
});

export const LoginForm = ({ id, onClose }) => {
  // const mutation = id === undefined ? ADD_USER : UPDATE_USER;
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    onCompleted: () => {
      if (onClose !== undefined) onClose();
    },
  });

  const { values, errors, handleSubmit, handleBlur, handleChange, isValid } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, helpers) => {
        console.log(values, helpers);
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
    });

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Street Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Email Address"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <MailSwitch />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" disabled={loading}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};
