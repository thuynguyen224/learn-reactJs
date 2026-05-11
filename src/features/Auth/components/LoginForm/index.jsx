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
    position: "relative",
  },
  avatar: {
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
  },
  submit: {},
  progress: {
    position: "absolute",
    paddingTop: 3,
    marginBottom: 10,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup
    .object({
      username: yup.string().required("Please enter email"),
      password: yup.string().required("Please enter password"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;
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
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="username" label="Username" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
