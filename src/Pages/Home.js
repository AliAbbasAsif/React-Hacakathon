import React, { useState } from "react";
import CSScreenHeader from "../Components/CSScreenHeader";
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
      <Navbar name={'XYZ'} />
      <CSScreenHeader text={"Home"} />
    </div>
  );
}

export default Home;
