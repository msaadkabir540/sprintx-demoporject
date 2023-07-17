import React, { useState } from "react";
import foodImage from "../Pages/images/food1.jpg";

const Frame = ({ backgroundColor, headingColor, textColor, fontSize }) => {
  return (
    <>
      <div
        className="frame-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="framebody">
          <h1 style={{ color: headingColor, fontSize: fontSize }}>
            Frame Heading
          </h1>
          <p style={{ color: textColor }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, fugit. Exercitationem quam ex molestiae aliquam, vitae
            impedit quidem distinctio atque nemo provident delectus deserunt
            explicabo?
          </p>
          <img src={foodImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Frame;
