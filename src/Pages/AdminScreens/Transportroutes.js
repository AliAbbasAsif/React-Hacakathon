import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CSAlert from '../../Components/CSAlert'
import CSButton from '../../Components/CSButton'
import CSDropDown from '../../Components/CSDropDown'
import CSScreenHeader from '../../Components/CSScreenHeader'
import CSSmallLoader from '../../Components/CSSmallLoader'
import CSTable from '../../Components/CSTable'
import CSTextField from '../../Components/CSTextField'
import { getData, sendData } from '../../Config/firebasemethods'

export default function Transportroutes() {
    const [model, setmodel] = useState({});
    const [data, setData] = useState([]);
    const [loader, setloader] = useState(false);
    const [alertmsg, setalertmsg] = useState("");
    const [severity, setServerity] = useState("");

    let fillmodel = (key, val) => {
        model[key] = val;
        setmodel({ ...model });
        console.log(model);
      };
      let transportdata = () => {
        fillmodel("status", true);
        sendData(model, "TransportRoutes/")
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
        getData("TransportRoutes/")
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
            <CSScreenHeader text={"Transport Routes"} />
            <Box className="p-5">
            <Box
          className="p-5"
          style={{ border: "2px solid #222", borderRadius: "15px" }}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <CSTextField
                label="Transport Routes"
                required={true}
                value={model.transportroutes}
                onChange={(e) => fillmodel("transportroutes", e.target.value)}
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
                            key:'transportroutes',
                            displayName: 'Transport Route '
                        },
                      
                    ]}  /> ) : <CSSmallLoader width='20%' height='50%' />}
</Box>
            </Box>
            <CSAlert alertMessage= {alertmsg} severity={severity} />
    </div>
  )
}
