import React from "react";
import "../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Button = () => {
  return (
    // <div className="container">
    //   <div className="btn">
    //     <a>Read More</a>
    //   </div>
    // </div>
    <div className="container">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
        mt-4
      >
        <button type="button" className="btn btn-info">
          Visit Profile
        </button>

        <button type="button" className="btn btn-light">
          <ArrowForwardIosIcon />
        </button>
      </div>

      <button className=" b4">Primary</button>

      <button className="b2">Home</button>
      <button className="b3">Login</button>
      <button className="b5">Registration</button>
    </div>
  );
};

export default Button;
