import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-control/InputField";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar, Button, LinearProgress } from "@mui/material";
import PasswordField from "components/form-control/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  avatar: {
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
  },
  submit: {},
  progress: {
    position: 'absolute',
    paddingTop: 3,
    marginBottom: 10
  }
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Please enter full name")
        .test(
          "should has at least two words",
          "Please enter at least two words",
          (value) => {
            return value.split(" ").length >= 2;
          },
        ),
      email: yup
        .string()
        .required("Please enter email")
        .email("Please enter a valid email"),
      password: yup
        .string()
        .required("Please enter password")
        .min(6, "Please enter at lease 6 character"),
      retypePassword: yup
        .string()
        .required("Please enter retype password")
        .oneOf([yup.ref("password")], "Password does not match"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };

  const {isSubmitting} = form.formState;
  return (
    <div className={classes.root} sx={{ paddingTop: 4 }}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar} sx={{ bgcolor: "secondary.main" }}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography
        className={classes.title}
        sx={{ mt: 2, mb: 3 }}
        component="h3"
        variant="h5"
      >
        Create an accout
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
