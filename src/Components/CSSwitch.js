import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

function CSSwitch(props) {
  const { label, onChange, checked } = props;
  return (
    <>
    <FormControlLabel
    control={<Switch  onChange={onChange} checked={checked} />}
      label={label}
    />
    </>
  );
}

export default CSSwitch;
