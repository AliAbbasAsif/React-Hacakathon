import { Box, CircularProgress, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CSAlert from "../Components/CSAlert";
import CSButton from "../Components/CSButton";
import CSTextField from "../Components/CSTextField";
import { LoginUser, sendResetPwdEmail } from "../Config/firebasemethods";
import { add } from "../redux/loginReducer";

function Login() {
  const [model, setmodel] = useState({});
  const [loader, setloader] = useState(false);
  const [error,seterror]=useState('')
let dispatch = useDispatch()

  let tele = () => {
    navigate("/signup");
  };
  let navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    // console.log(model);
  };
  let login = () => {
    setloader(true);
    LoginUser(model)
      .then((success) => {
        console.log(success)
        if (success.category == "admin") {
          navigate("/admin", {
            state: success,
          });
          dispatch(add(success))
        } else if (success.category == "user") {
          navigate("/home", {
            state: success,
          });
          dispatch(add(success))
        }
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        seterror(err)
        setloader(false);
      });
  };
  return (
    
    <div
      className="header box"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "45%", pt: 2 }}>
        <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Login
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <CSTextField
                label="Email"
                required={true}
                value={model.email}
                type={"email"}
                onChange={(e) => fillmodel("email", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Password"
                required={true}
                value={model.password}
                type={"password"}
                onChange={(e) => fillmodel("password", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
            <Typography
          
              variant="span"
              sx={{  cursor: "pointer", }}
              onClick={(e)=>{
                model.email ? sendResetPwdEmail(model.email) : alert('No Email Provided')
              }}
            >
              <Link underline="hover">
             Forget Password
              </Link>
            </Typography>
            </Grid>
            <Grid item md={12}>
              <CSButton
                label={"Login"}
                loading={loader}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={login}
                disabled={loader}
              />
            </Grid>
            <Grid md={12} item>
              <Typography variant="subtitle2" color='error'>{error.toString()}</Typography>
            </Grid>
          </Grid>
          
          <Grid sx={{ p: 1.5 }}>
      
            <Typography variant="span">Dont Have An Account ? </Typography>
            <Typography
              variant="span"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={tele}
            >
              SignUp
            </Typography>
       
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
