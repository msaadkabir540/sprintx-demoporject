import React from "react";

const Heading = ({title}) => {
  return (
    <div>
      <div className="heading">
        <div className="text">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;
