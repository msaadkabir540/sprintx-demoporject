import React from "react";
import Heading from "./Heading";
import MaleImg from "../images/male-photo1.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="Main-testimonal  ">
        <Heading title={"What Our Customers Say"} />

        <div className="testimonal-container container ">
          <div className="testimonal-main-body">
            <div className="testimonal-rateing">✡ ✡ ✡ ✡</div>
            <div className="testimonal-body">
              <div className="review">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus cum inventore hic enim. Ipsum, natus!
                </p>
              </div>
              <div className="testimonal-img">
                <img src={MaleImg} alt="" />
              </div>
              <p>Customer Name</p>
            </div>
          </div>
          <div className="testimonal-main-body">
            <div className="testimonal-rateing">✡ ✡ ✡ ✡</div>
            <div className="testimonal-body">
              <div className="review">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus cum inventore hic enim. Ipsum, natus!
                </p>
              </div>
              <div className="testimonal-img">
                <img src={MaleImg} alt="" />
              </div>
              <p>Customer Name</p>
            </div>
          </div>
          <div className="testimonal-main-body">
            <div className="testimonal-rateing">✡ ✡ ✡ ✡</div>
            <div className="testimonal-body">
              <div className="review">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus cum inventore hic enim. Ipsum, natus!
                </p>
              </div>
              <div className="testimonal-img">
                <img src={MaleImg} alt="" />
              </div>
              <p>Customer Name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
