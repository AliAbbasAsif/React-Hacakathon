import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import "../App.css";
import { getData } from "../Config/firebasemethods";

export default function CSDropDown(props) {
  const {
    label,
    value,
    onChange,
    datasource,
    required,
    disabled,
    displayField,
    valueField,
    nodename,
  } = props;

  let [datasrc, setDatasrc] = useState(datasource);
  let getDatasrc = () => {
    if (nodename) {
      getData(nodename)
        .then((res) => {
          setDatasrc(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getDatasrc();
  }, []);
  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        variant="standard"
        fullWidth={true}
        value={value}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        required={required}
        onChange={onChange}
        disabled={disabled}

        // InputLabelProps={{ className: "textFieldlabel" }}
        // inputProps={{ className: "textFieldlabel" }}
      >
        {datasource && datasource.length > 0
          ? datasource.map((x) => (
              <MenuItem value={x[valueField ? valueField : "id"]}>
                {x[displayField ? displayField : "displayname"]}
              </MenuItem>
            ))
          : null}
      </Select>
    </>
  );
}
