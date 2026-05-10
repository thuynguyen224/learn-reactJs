import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "components/form-control/InputField";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar, Button } from "@mui/material";
import PasswordField from "components/form-control/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
  },
  submit: {},
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root} sx={{ paddingTop: 4 }}>
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
