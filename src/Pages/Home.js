import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSButton from "../Components/CSButton";
import CSScreenHeader from "../Components/CSScreenHeader";
import Navbar from "../Components/Navbar";
import { getData } from "../Config/firebasemethods";
import CSFullScreenLoader from '../Components/CSFullScreenLoader'
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);
  let navigate = useNavigate();
  let teleport = (e) => {
    // console.log(e)
    navigate('/verification', {
      state: {
          item:{e}
      }
  })
  };
  let getdata = () => {
    setloader(true)
    getData("Transports")
    .then((res) => {
        setloader(false)
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setloader(false)
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    loader ? (
      <Box>
<CSFullScreenLoader/>

      </Box>
      
    ) :(
    <div>
      <Navbar />
      <CSScreenHeader text={"Booking"} />

      <Box className="p-4">
        <Box>
          <Grid container spacing={2}>
            {data.map((e) => (

                <Grid md={5} item style={{
                  backgroundColor: "#222",
                  borderRadius: "15px",
                  color: "white",
                }}
                className="p-4 mx-5 my-2">
                  <Typography variant="h5" align="center">{e.transportname}</Typography>
                  <Box className='px-3 py-2'>
                  <Typography  align="left">Transportation Name: {e.transportname}</Typography>
                  <Typography  align="left">Transportation Routes: {e.transportroutes}</Typography>
                  <Typography  align="left">Maximun Seats available : {e.noofseats}</Typography>
                  <Typography  align="left">Transport Type: {e.transporttype}</Typography>
                  <Typography  align="left">Price per Seats: {e.price}Rs</Typography>
                  <Box className='pt-4'>
                   <CSButton label={'Book'} color='success' variant='contained'    onClick={() => teleport(e)} />
                   </Box>
                  </Box>
                </Grid>
              
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
     )
  );
}

export default Home;
