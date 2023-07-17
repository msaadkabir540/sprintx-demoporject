import React, { useState } from "react";
import WidgetNavbar from "./WidgetNavbar";
import ColorPicker from "./widget/ColorPicker";

const Widgets = ({ getColor, getTextColor, getHeadingColor }) => {
  const handleColorChange = (color, name) => {
    if (name === "Background Color") {
      handleBackgroundColor(color);
      console.log(name);
    } else if (name === "Heading Color") {
      handleHeadingColor(color);
      console.log(name);
    } else if (name === "Text Color") {
      console.log(name, "call");
      handleTextColor(color);
    }
  };

  const handleBackgroundColor = (color) => {
    getColor(color);
  };

  const handleHeadingColor = (color) => {
    getHeadingColor(color);
  };
  const handleTextColor = (color) => {
    getTextColor(color);
  };
  const propertyName = [
    { id: 1, name: "Background Color" },
    { id: 2, name: "Heading Color" },
    { id: 3, name: "Text Color" },
  ];
  return (
    <>
      {/* <WidgetNavbar /> */}
      <div className="colorpickerMainbody">
        {propertyName.map(({ name, id }) => {
          return (
            <div key={id}>
              <ColorPicker
                getBackgroundColor={(color) => handleColorChange(color, name)}
                porpertyNames={name}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Widgets;
