import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import './ResturantArea.css'; // Ensure this CSS file includes styles for slick slider

import BookNowButton from './BookNowButton';
import { ResturantAreaData } from './ResturantAreaData';

export default function ResturantArea() {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize slick slider when component mounts
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Ensure slider starts at the first slide
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000, // Adjust autoplay speed if needed
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="restaurant-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {ResturantAreaData.map((item, index) => (
          <div key={index}>
            <div className="single-restaurants bg-2" style={{ backgroundImage: `url(${item.image})` }}>
              {item.logo}
              <span>{item.heading}</span>
              <p className="all-content-justify">{item.description}</p>
              <BookNowButton ButtonName="Book Now" />
            </div>
          </div>
        ))}
      </Slider>
    </div>


  );
}
