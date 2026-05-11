import React from "react";
import RegisterForm from "../RegisterForm";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useDispatch } from "react-redux";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.fullName;
      values.id = 6;

      const action = register(values);
      console.log("action: ", action);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("New user: ", user);
    } catch (error) {
      console.log("failed to register: ", error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
