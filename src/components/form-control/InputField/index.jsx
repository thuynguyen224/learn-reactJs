import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disable}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default InputField;
