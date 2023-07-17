import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";

const FoodMenu = () => {
  const renderedMenuData = [
    {
      img: food1,
      subTitle: "Food Menu Item 1",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "Rs 180/-",
    },
    {
      img: food2,
      subTitle: "Food Menu Item 2",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "Rs 250/-",
    },
    {
      img: food3,
      subTitle: "Food Menu Item 3",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "Rs 140/-",
    },
    {
      img: food1,
      subTitle: "Food Menu Item 4",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: "Rs 100/-",
    },
  ];

  const renderedList = renderedMenuData.map(
    ({ img, subTitle, description, price }, index) => {
      return (
        <div key={index} className="food-menu-body ">
          <div className="food-menu-image">
            <img src={img} alt="Food Images" />
          </div>
          <div className="food-menu-item">
            <div className="sub-title">{subTitle}</div>
            <div className="food-desc">{description}</div>
            <div className="food-price">{price}</div>
          </div>
        </div>
      );
    }
  );
  return (
    <>
      <div id="food-menu">
        <Heading title={"Food Menu"} />
        <div className="food-menu-main container">{renderedList}</div>
        <div className="menubtn">
          <Link to="/productmenu">
            <button className="btn-header">More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
