import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CSButton from "../Components/CSButton";
import CSTextField from "../Components/CSTextField";
import CSDatePicker from "../Components/CSDatePicker";
import { sendData, signUpUser } from "../Config/firebasemethods";
import { setDate } from "../Config/Core/core";
import CSAlert from "../Components/CSAlert";
function SignUp() {
  const [model, setmodel] = useState({});
  const [isLoading, setLoader] = useState(false);
  const [csdate, setcsdate] = useState();
  const [alertmsg, setalertmsg] = useState("");
  const [severity, setServerity] = useState("");
  let navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let register = () => {
    fillmodel("age", new Date().getFullYear() - model.dateOfBirth.year);
    fillmodel("category", "user");
    fillmodel("registrationDate", setDate(new Date()));
    fillmodel("registrationYear", new Date().getFullYear());
  };
  let signin = () => {
    register();
    setLoader(true)
    signUpUser(model)
    .then((success) => {
      setLoader(false)
     alert(success)
      navigate("/");
    })
    .catch((error) => {
        setLoader(false)
     alert(error)
      });
  };
  let locate = () => {
    navigate("/");
  };
  return (
    <>
    <div
      className="box"
      style={{ alignItems: "center", justifyContent: "center",height:'80vh' }}
    >
      <Box sx={{ width: "45%", pt: 2 }}>
        <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Sign Up
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={6}>
              <CSTextField
                label="UserName"
                required={true}
                value={model.username}
                onChange={(e) => fillmodel("username", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Email"
                required={true}
                value={model.email}
                type={"email"}
                onChange={(e) => fillmodel("email", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Password"
                required={true}
                value={model.password}
                type={"password"}
                onChange={(e) => fillmodel("password", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSDatePicker
                onChange={(newValue) => {
                  setcsdate(newValue);
                  fillmodel("dateOfBirth", {
                    day: newValue.$D,
                    month: newValue.$M,
                    year: newValue.$y,
                  });
                }}
                value={csdate}
                label={"Date of Birth"}
              />
            </Grid>
            <Grid item md={12}>
              <CSButton
             label={"Sign In"}
             loading={isLoading}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={signin}
                disabled={isLoading}
              />
            </Grid>
          </Grid>
          <Grid sx={{ p: 1.5 }}>
            <Typography variant="span">Already Have An Account ? </Typography>
            <Typography
              variant="span"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={locate}
            >
              Login
            </Typography>
          </Grid>
        </Box>
      </Box>
    </div>

    </>
  );
}
export default SignUp;
