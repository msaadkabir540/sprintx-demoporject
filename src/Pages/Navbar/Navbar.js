import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShow = () => {
    setShowNavbar(!showNavbar);
  };

  const handleClick = (menuId) => {
    const scrollDiv = document.getElementById(menuId);

    if (scrollDiv) {
      scrollDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showClass = showNavbar ? " navbar-list-show" : "navbar-list";

  return (
    <>
      <div className="main">
        <div className="navbar container">
          <div className="logo">
            <h1>Food Market</h1>
          </div>
          <div className={showClass}>
            <ul>
              <li onClick={() => handleClick("header-section")}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => handleClick("about-section")}>About</li>
              <li onClick={() => handleClick("foodProduct")}>Product</li>
              <li onClick={() => handleClick("contact-section")}>Contact</li>
            </ul>
          </div>
          <div className="bar" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
