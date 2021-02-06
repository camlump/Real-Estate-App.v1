import React from "react";

// import banner from "../images/house1.jpg";

import "../StyleSheet/Banner.css";

const Banner = () => {
  return (
    <div className="Banner__container">
      
  
      <div class="container">
        <h2>Are you looking to buy, sell or rent, we gotcha.</h2>
        <div class="row">
          <div class="col">
            <div className="text__box">
              <h2>Buy a home</h2>
              <p>
                looking to buy a new home, we offer many listings across various
                states, including properties you won't find anyhwere else.
              </p>
            </div>
          </div>
          <div class="col">
            <div className="text__box">
              <h2>Sell a home</h2>
              <p>
                looking to buy a new home, we offer many listings across various
                states, including properties you won't find anyhwere else.
              </p>
            </div>
          </div>
          <div class="col">
            <div className="text__box">
              <h2>Rent a home</h2>
              <p>
                looking to buy a new home, we offer many listings across various
                states, including properties you won't find anyhwere else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Banner;
