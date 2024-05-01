import React from 'react';
import './FacilityBox.css';
import facilitiesCardBg from '../Images/facilities-card-bg.png';
import { FacilityBoxData } from './FacilityBoxData';

export const FacilityBox = () => {
  return (
    <>
      {FacilityBoxData.map((items, index) => (
        <div className="col-lg-3 col-sm-6" key={index}>
          <div className="single-facilities-wrap">
            <div className="single-facilities" style={{ backgroundImage: `url(${facilitiesCardBg})` }}>
              {items.icon}
              <h3>{items.facilityHeading}</h3>
              <p className="all-content-justify">{items.description}</p>
              <a href="./about-us.php" className="icon-btn">
                <i className='bx bx-horizontal-right'></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
