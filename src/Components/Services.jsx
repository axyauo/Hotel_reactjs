import './Services.css';
import React from 'react';
import { ServicesData } from './ServicesData';

export default function Services() {
  return (
    <>
      {ServicesData.map((service, index) => (
        <div className="col-md-4 col-6" key={index}>
          <div className="services">
            <div className="iconsImg">
              <img src={service.logo} alt="" />
            </div>
            <p>{service.serviceName}</p>
          </div>
        </div>
      ))}
    </>
  );
}
