import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function CSScreenHeader(props) {
  const { text } = props;
  return (
    <>
      <Box sx={{ px:4 ,py:2 }}>
        <Box sx={{ backgroundColor: "#222", color: "white", p: 1 ,borderRadius:'15px'}}>
          <Typography variant="h4" align="center" sx={{fontWeight:600}}>{text}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default CSScreenHeader;
