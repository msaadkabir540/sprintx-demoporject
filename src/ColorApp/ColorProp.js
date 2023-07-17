import React, { useState } from "react";
import Widgets from "./Widgets";
import Frame from "./Frame";
import "./style.css";

const ColorProp = () => {
  const [selecteColor, setSelectColor] = useState("");
  const [selecteTextColor, setSelectTextColor] = useState("");
  const [selecteHeadingColor, setSelectHeadingColor] = useState("");

  const colorPicker = (color) => {
    setSelectColor(color);
  };
  const colorTextPicker = (color) => {
    setSelectTextColor(color);
  };
  const colorHeadingPicker = (color) => {
    setSelectHeadingColor(color);
  };
  console.log("into main Color picker component", selecteColor);
  return (
    <>
      <div className="colorpropmain">
        <h1>ColorProp</h1>

        <div className="maincomponentclass">
          <div>
            <Widgets
              getColor={colorPicker}
              getHeadingColor={colorHeadingPicker}
              getTextColor={colorTextPicker}
            />
          </div>
          <div>
            <Frame
              backgroundColor={selecteColor}
              headingColor={selecteHeadingColor}
              textColor={selecteTextColor}
              fontSize={"35px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorProp;
