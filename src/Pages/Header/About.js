import React from "react";
import AboutImg from "../images/about-photo.jpg";

const About = () => {
  return (
    <>
      <div id="about-section" className="about container ">
        <div className="about-main ">
          <div className="text-container">
            <h3 className="inner-text">About Us</h3>
            <h1 className="inner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              adipisci.
            </h1>
            <p className="inner-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatibus rerum impedit nam deserunt modi tempore non corporis
              provident eligendi placeat ut nobis voluptas minima.
            </p>
          </div>
          <div className="image-container">
            <img className="about-image" src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
