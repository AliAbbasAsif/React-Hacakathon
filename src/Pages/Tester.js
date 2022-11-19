import React, { useState } from "react";
import CSAlert from "../Components/CSAlert";
import CSButton from "../Components/CSButton";
import CSCheckbox from "../Components/CSCheckbox";
import CSFullScreenLoader from "../Components/CSFullScreenLoader";
import CSRadio from "../Components/CSRadio";
import CSScreenHeader from "../Components/CSScreenHeader";
import CSSmallLoader from "../Components/CSSmallLoader";
import CSSwitch from "../Components/CSSwitch";
import { resetpass } from "../Config/firebasemethods";
export default function Tester() {
  const [statement, setstatement] = useState(false);
  const [radiostatement, setradiostatement] = useState('');

  const [alertMessage, setAlertMessage] = useState("hdgsbciufjbiulvkjbfoilk");
  const [severity, setServerity] = useState("error");

  console.log(radiostatement)
  let checking = (e) => {
    console.log(e.target.checked);
    setstatement(e.target.checked);
  };

  let radiochecking = (e) => {
    // console.log(e.target.value);
    setradiostatement(e.target.value);
  };
  return (
    <div>
        {/* <CSButton label={'Login'} color='success' variant='contained' onClick={resetpass} /> */}
{/* <CSSwitch  label={'rwhjb'} onChange={(e)=>console.log(e.target.checked)} /> */}
        {/* <CSAlert alertMessage={alertMessage} severity={severity}  /> */}
      {/* <CSCheckbox label="Are you sure?" checked={statement} onChange={checking} /> */}
      {/* <CSRadio topic={"Gender"} id={'gender'} label={['Male','Female']} onChange={radiochecking}   /> */}
      {/* <CSSmallLoader width='20%'  height='20%' /> */}
      {/* <CSFullScreenLoader/> */}
      <CSScreenHeader text={'overview'}/>
    </div>
  );
}
