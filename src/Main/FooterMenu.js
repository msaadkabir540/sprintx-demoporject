import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MainMenu = () => {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
              <Link to={"/foodapp"}>Food App</Link>
            </li>
            <li>
              <Link to="/colorapp">Color App</Link>
            </li>
            <li>
              <Link to="/formpage">Form App</Link>
            </li>
            <li>
              <Link to="/reacthookfrom">React Hook From</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default MainMenu;
