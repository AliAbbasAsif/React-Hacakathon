import { TextField } from "@mui/material";
import React from "react";
import "../App.css";

function CSTextField(props) {
  const { label, onChange, value, type, disable, required, helpertext,disabled } = props;
  return (
    <TextField
      disabled={disable}
      label={label}
      value={value}
      type={type}
      onChange={onChange}
      required={required}
      fullWidth={true}
      helperText={helpertext}
      
      // InputLabelProps={{ className: "textFieldlabel" }}
      // inputProps={{ className: "textFieldlabel" }}
    />
  );
}

export default CSTextField;
