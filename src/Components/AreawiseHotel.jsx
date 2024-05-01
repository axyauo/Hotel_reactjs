import React from 'react'
import './AreawiseHotel.css'
import { AreawiseHotelData } from './AreawiseHotelData'
import Button from './Button';

export default function AreawiseHotel() {
  return (
    <>
        <div className="container">
            <div className="quick">
                <h3><span>Quick</span> <br/> Search</h3>
                <Button ButtonName="Domestic Hotels" />
            </div>
            <div className="row mt-4">
            {AreawiseHotelData.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <div className="row">
                    <div className="col-3">
                        <div className="hotelImg">
                        <img src={item.image} alt={item.location} />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="hotelInfo">
                            <h4><a href="#">{item.location}</a></h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}
