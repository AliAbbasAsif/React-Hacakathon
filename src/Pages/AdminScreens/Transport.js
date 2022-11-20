import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSScreenHeader from "../../Components/CSScreenHeader";
import CSDropDown from "../../Components/CSDropDown";
import CSTextField from "../../Components/CSTextField";
import { getData, sendData } from "../../Config/firebasemethods";
import CSButton from "../../Components/CSButton";
import CSAlert from "../../Components/CSAlert";
import CSTable from '../../Components/CSTable'
import CSSmallLoader from "../../Components/CSSmallLoader";

export default function Transport() {
  const [model, setmodel] = useState({});
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);
  const [alertmsg, setalertmsg] = useState("");
  const [severity, setServerity] = useState("");
  const seatsprices = {
    School: 100,
    Office: 220,
    Private: 280,
  };
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let transportdata = () => {
    fillmodel("status", true);
    sendData(model, "Transports/")
    .then((success) => {
      setloader(true);
        setloader(false);
        setalertmsg(success);
        setServerity("success");
        setTimeout(() => {
          setalertmsg('');
          setServerity("");
        }, 3000);
        console.log(success);
      })
      .catch((err) => {
        setloader(false);
        setalertmsg(err);
        setServerity("error");
        setTimeout(() => {
          setalertmsg('');
          setServerity("");
        }, 3000);
        console.log(err);
      });
  };
  let getdata =()=>{
    getData("Transports")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <div>
      <CSScreenHeader text={"Transportation Form"} />
      <Box className="p-5">
        <Box
          className="p-5"
          style={{ border: "2px solid #222", borderRadius: "15px" }}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <CSTextField
                label="Transport Name"
                required={true}
                value={model.transportname}
                onChange={(e) => fillmodel("transportname", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSDropDown
                label="Pickup Transport Routes"
                required={true}
                nodename="TransportRoutes"
                displayField="transportroutes"
                valueField="transportroutes"
                onChange={(e) => fillmodel("transportroutes", e.target.value)}
              
              />
            </Grid>

            <Grid item md={6}>
              <CSTextField
                label="No of Seats"
                required={true}
                value={model.noofseats}
                type={"number"}
                onChange={(e) => fillmodel("noofseats", e.target.value)}
              />
            </Grid>

            <Grid item md={6}>
              <CSDropDown
                label="Transport Type"
                required={true}
                onChange={(e) => fillmodel("transporttype", e.target.value)}
                nodename="TransportType"
                  displayField="Type"
                  valueField="Code"
              />
            </Grid>

            <Grid item md={6}>
              <CSTextField
                label="Price"
                required={true}
                value={model.price}
                onChange={(e) => fillmodel("price", e.target.value)}
              />
            </Grid>

            <Grid item md={6}>
              <CSButton
                label={"Send Data"}
                loading={loader}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={transportdata}
                disabled={loader}
              />
            </Grid>
          </Grid>
        </Box>


<Box className='pt-3'>
{data && data.length > 0 ? ( <CSTable datasource={data} Cols={[
                        {
                            key:'id',
                            displayName: 'Id'
                        },
                        {
                            key:'transportname',
                            displayName: 'Transport Name'
                        },
                        {
                            key:'transporttype',
                            displayName: 'TransportType'
                        },
                        {
                            key:'transportroutes',
                            displayName: 'TransportRoutes'
                        },
                        {
                            key:'noofseats',
                            displayName: 'Seats'
                        },
                        {
                            key:'price',
                            displayName: 'Price'
                        },
                        {
                            key:'',
                            displayName: 'Actions'
                        },
                    ]}  /> ) : <CSSmallLoader width='20%' height='50%' />}
</Box>


      </Box>
          
      <CSAlert alertMessage= {alertmsg} severity={severity} />
    </div>
  );
}
