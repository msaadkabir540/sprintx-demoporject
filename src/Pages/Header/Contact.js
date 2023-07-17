import React from "react";
import contactPhoto from "../images/about-photo.jpg";
const Contact = () => {
  return (
    <>
      <div id="contact-section" className="contact-main">
        <div className="contact-body container  ">
          <div className="contact-img">
            <img src={contactPhoto} alt="" />
          </div>
          <div className="contact-form">
            <h2>Contact Us </h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="E-mail" />
            <textarea placeholder="Massage" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
