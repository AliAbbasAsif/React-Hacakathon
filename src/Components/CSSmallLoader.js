import React from "react";
import loaderimg from "../Images/loader.gif";
export default function CSSmallLoader(props) {
  const { width, height } = props;
  return (
    <div     className='loader' >
      <img src={loaderimg} width={width} height={height} />
    </div>
  );
}
