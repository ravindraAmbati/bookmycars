import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carousel_1.jpg';
import carousel2 from '../images/carousel_2.jpg';
import carousel3 from '../images/carousel_3.jpg';
import carousel4 from '../images/carousel_4.jpg';
import carousel5 from '../images/carousel_5.jpg';

function ControlledCarousel() {  
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="carousel1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="carousel2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="carousel3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="carousel4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel5}
            alt="carousel5"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel;