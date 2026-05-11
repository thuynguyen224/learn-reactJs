import React from "react";
import RegisterForm from "../RegisterForm";
import PropTypes from "prop-types";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      values.username = values.fullName;
      values.id = 6;

      const action = register(values);
      console.log("action: ", action);
      const resultAction = await dispatch(action);
      const userId = unwrapResult(resultAction);

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      console.log("New user: ", userId);
      enqueueSnackbar("Register sussccessfully!!!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
