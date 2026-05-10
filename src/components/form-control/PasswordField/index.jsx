import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormHelperText, OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disable } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!fieldState.error}
          >
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
              id={name}
              type={showPassword ? "text" : "password"}
              label={label}
              disabled={disable}
              {...field}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}

export default PasswordField;
