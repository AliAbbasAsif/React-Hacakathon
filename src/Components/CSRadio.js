import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { FormLabel } from "react-bootstrap";

export default function CSRadio(props) {
  const { topic,label,id,onChange } = props;
  return (
    <>
      <FormControl>
        <FormLabel id={id}>{topic}</FormLabel>
        <RadioGroup aria-aria-labelledby={id} name={id} onChange={onChange} row>
            {label.map((e)=>(
            <FormControlLabel control={<Radio/>} label={e} value={e} />
            ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}
