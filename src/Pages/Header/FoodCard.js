import React from "react";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import Heading from "./Heading";
const FoodCard = () => {
  const cardData = [
    {
      images: food1,
    },
    {
      images: food2,
    },
    {
      images: food3,
    },
  ];
  const renderedCards = cardData.map(({ images ,index}) => {
    return (
      <>
        <div className="container-hoverBox" key={index}>
          <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={images} alt="" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Food Name</h3>
              <p className="content-text">This is a short description</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div id="foodProduct">
        <Heading title={"Food Product"} />
        <div className="card-main">
          <div className="foodCard-main container">{renderedCards}</div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
