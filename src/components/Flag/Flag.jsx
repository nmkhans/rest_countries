import React from "react";
import "./Flag.css";

const Flag = ({ flag }) => {
  return (
    <div className="flag">
      <img src={flag} alt="" />
    </div>
  );
};

export default Flag;
