import React, { useState } from "react";
import "./style.css";

const ColorPicker = ({ getBackgroundColor, porpertyNames }) => {
  const handelGetColorClick = (e) => {
    const selectColor = e.target.value;
    getBackgroundColor(selectColor);
  };

  return (
    <>
      <div className="colorpickermain">
        <div className="colorpickertext">{porpertyNames}</div>
        <div className="coloinputclass">
          <input type="color" onChange={handelGetColorClick} />
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
