import React from "react";
import "./style.css";

const ChoiceUs = () => {
  return (
    <>
      <div className="choose">
        <div className="choose-us">
          <div className="img-tag">
            <i className="fa fa-solid fa-truck img-one"></i>
            <i className="fa fa-solid fa-truck img-two"></i>
          </div>
          <div className="text-tag">
            <div className="service-content">
              <div className="service-heading">Free Shipping</div>
              <div className="service-description">
                There are many variations of pass
              </div>
            </div>
          </div>
        </div>
        <div className="choose-us">
          <div className="img-tag">
            <i className="fa fa-solid fa-phone img-one"></i>
            <i className="fa fa-solid fa-phone img-two"></i>
          </div>
          <div className="text-tag">
            <div className="service-content">
              <div className="service-heading">Order Online</div>
              <div className="service-description">
                There are many variations of pass
              </div>
            </div>
          </div>
        </div>
        <div className="choose-us">
          <div className="img-tag">
            <i className="fa fa-solid fa-save img-one"></i>
            <i className="fa fa-solid fa-save img-two"></i>
          </div>
          <div className="text-tag">
            <div className="service-content">
              <div className="service-heading">Shop And Save</div>
              <div className="service-description">
                There are many variations of pass
              </div>
            </div>
          </div>
        </div>
        <div className="choose-us">
          <div className="img-tag">
            <i className="fa fa-solid fa-cart-plus img-one"></i>
            <i className="fa fa-solid fa-cart-plus img-two"></i>
          </div>
          <div className="text-tag">
            <div className="service-content">
              <div className="service-heading">Safe Shopping</div>
              <div className="service-description">
                There are many variations of pass
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoiceUs;
