import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import { TestimonialData } from './TestimonialData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgimg from '../Images/testimonials-bg.png'

export const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Slick Slider after component is mounted
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide initially
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {TestimonialData.map((item, index) => (
        <div className="single-testimonials" key={index} style={{ backgroundImage: `url(${bgimg})` }}>

          <h3>{item.title}</h3>
          <p className="all-content-justify">“{item.comments}”</p>
          <div className="testimonials-content">
            <img src={item.image} alt="Image" />
            <h4>{item.name}</h4>
            <span>{item.designsation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
