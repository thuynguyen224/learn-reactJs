import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onsubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup
        .string()
        .required("please enter title")
        .min(5, "title is too short"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onsubmit } = props;
    if (onsubmit) {
      onsubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
