import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <section id="header-section" className="header-main-section">
        <div className="header-main-class">
          <div className="header-title">
            {" "}
            <h1>Food Market</h1>
          </div>
          <p className="header-subtitle">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            adipisci.
          </p>
          <button className="btn-header">Click More</button>
        </div>
      </section>
    </>
  );
};

export default Header;
