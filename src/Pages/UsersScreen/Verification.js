import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import CSButton from "../../Components/CSButton";
import CSScreenHeader from "../../Components/CSScreenHeader";

export default function Verification() {
  let location = useLocation();
  let dt = location.state.item.e;
  console.log(dt);
  return (
    <div>
      <CSScreenHeader text={"Booking Verification"} />
      <Box className="pt-5">
        <Grid container spacing={2}>
          <Grid
            md={12}
            item
            style={{
              backgroundColor: "#222",
              borderRadius: "15px",
              color: "white",
            }}
            className="p-4 mx-5 my-2"
          >
            <Typography variant="h5" align="center">
              {dt.transportname}
            </Typography>
            <Box className="px-3 py-2">
              <Typography align="left">
                Transportation Name: {dt.transportname}
              </Typography>
              <Typography align="left">
                Transportation Routes: {dt.transportroutes}
              </Typography>
              <Typography align="left">
                Maximun Seats available : {dt.noofseats}
              </Typography>
              <Typography align="left">
                Transport Type: {dt.transporttype}
              </Typography>
              <Typography align="left">
                Price per Seats: {dt.price}Rs
              </Typography>
              <Typography align="left">
                Your Total Price:{dt.price * dt.noofseats} Rs
              </Typography>
            </Box>
            <Box className="px-5 py-3 ">
              <Grid>
                <Grid item md={4}>
                  <CSButton
                    label={"Proceed Payment"}
                    color="success"
                    variant="contained"

                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
