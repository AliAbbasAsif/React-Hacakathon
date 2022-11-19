import { Button, CircularProgress } from "@mui/material";
import React from "react";

function CSButton(props) {
  const {
    label,
    variant,
    onClick,
    color,
    startIcon,
    endIcon,
    disabled,
    loading = false,
  } = props;
  return (
    <>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        disabled={disabled}
        fullWidth={true}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{ p: 1.5 }}
      >
        {loading ? <CircularProgress/> : label}
      </Button>
    </>
  );
}

export default CSButton;
