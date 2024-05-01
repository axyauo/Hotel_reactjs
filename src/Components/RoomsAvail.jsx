import React from 'react';
import './RoomsAvail.css';
import room1 from './Images/room1.jpg';
import { RoomsData } from './RoomsData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RoomsAvail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, less than 1024px)
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Small devices (landscape phones, less than 768px)
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, // Extra small devices (phones, less than 480px)
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  

  return (
    <Slider {...settings}>
      {RoomsData.map((rooms, index) => (
        <div className="roomsAvail mt-5 mb-5" key={index}>
          <div className="roomsImg">
            <img src={rooms.image} alt="" />
          </div>
          <div className="roomsContent">
            <div className="roomsintro mt-3 mb-3">
              <h3>{rooms.type}</h3>
              <p>
                <span>{rooms.area}</span> m2 / <span>{rooms.adult}</span> Adult{' '}
                <span>{rooms.child}</span> Child
              </p>
            </div>
            <div className="roomPrice mt-3 mb-3">
              <p>
                from <br /> <span>₹ {rooms.price}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
