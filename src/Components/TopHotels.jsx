import React from 'react';
import './TopHotels.css';
import { Link } from 'react-router-dom';
import top1 from './Images/top1.webp'
import top2 from './Images/top2.avif'
import top3 from './Images/top3.webp'

let TopHotels = () => {
  return (
    <>
        <div className="col-md-4">
            <Link to="/Hotel01" > 
                <div className="top-hotels">
                    <div className="top-hotels-img">
                        <img src={top1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3>Archie Regency</h3>
                        <p>
                        <span>9.5</span> - <span>Excellent</span> (<span>2445</span>) <i className='bx bx-current-location' ></i> <span>Ranchi</span>
                        </p>
                        <h4><i className='bx bx-water' ></i> Pool  <i className='bx bx-spa' ></i> Spa  <i className='bx bxs-dog' ></i> Pet-friendly</h4>
                    </div>
                </div>
            </Link>
        </div>  
        <div className="col-md-4">
            <Link to="/Hotel02" > 
                <div className="top-hotels">
                    <div className="top-hotels-img">
                        <img src={top2} alt="" />
                    </div>
                    <div className="p-2">
                        <h3>Hotel Primero Primera</h3>
                        <p>
                        <span>9.8</span> - <span>Excellent</span> (<span>2345</span>) <i className='bx bx-current-location' ></i> <span>Jamshedpur</span>
                        </p>
                        <h4><i className='bx bx-water' ></i> Pool  <i className='bx bx-spa' ></i> Spa  <i className='bx bxs-dog' ></i> Pet-friendly</h4>
                    </div>
                </div>
            </Link>
        </div>  
        <div className="col-md-4">
            <Link to="/Hotel03" > 
                <div className="top-hotels">
                    <div className="top-hotels-img">
                        <img src={top3} alt="" />
                    </div>
                    <div className="p-2">
                        <h3>Candisol</h3>
                        <p>
                        <span>9.2</span> - <span>Excellent</span> (<span>2358</span>) <i className='bx bx-current-location' ></i> <span>Dhanbad</span>
                        </p>
                        <h4><i className='bx bx-water' ></i> Pool  <i className='bx bx-spa' ></i> Spa  <i className='bx bxs-dog' ></i> Pet-friendly</h4>
                    </div>
                </div>
            </Link>
        </div>  
    </>
  );
}
export default TopHotels;
