import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";

class DCarousel extends Component {
  render() {
    return (
      <div className="Carousel">
        <Carousel
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          interval={2000}
        >
          <div>
            <img src="/images/bridegroom.jpg" alt="Carousel1" />
          </div>
          <div>
            <img src="/images/groom.jpg" alt="Carousel2" />
          </div>
          <div>
            <img src="/images/bride.jpg" alt="Carousel3" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DCarousel;
