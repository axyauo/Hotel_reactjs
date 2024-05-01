import React, { useState, useEffect } from 'react';
import './Body.css'; 
import about_img from './Images/about_img.jpg';
import banner3 from './Images/banner3.jpg';
import resion_img from './Images/resions_img.jpg';
import resion_img_2 from './Images/resions_img_2.jpg';
import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Services from './Services';
import logo from './Images/logo.png'
import RoomsAvail from './RoomsAvail';
import SearchHotel from './SearchHotel';
import TopHotels from './TopHotels.jsx';
import AreawiseHotel from './AreawiseHotel.jsx';

let Body = () => {
    const [counts, setCounts] = useState({
        hotelRooms: 0,
        activities: 0,
        restaurants: 0
    });

    useEffect(() => {
        // Simulating asynchronous data fetching
        // Replace this with actual fetching logic
        setTimeout(() => {
            setCounts({
                hotelRooms: 50,
                activities: 15,
                restaurants: 6
            });
        }, 1000); // Delay for demonstration purpose, you can remove this in your actual implementation
    }, []);

    useEffect(() => {
        const incrementInterval = setInterval(() => {
            setCounts(prevCounts => ({
                hotelRooms: prevCounts.hotelRooms < 50 ? prevCounts.hotelRooms + 1 : 50,
                activities: prevCounts.activities < 15 ? prevCounts.activities + 1 : 15,
                restaurants: prevCounts.restaurants < 6 ? prevCounts.restaurants + 1 : 6
            }));
        }, 100); // Adjust the interval as needed

        return () => clearInterval(incrementInterval);
    }, []);

    // Render the count items dynamically
    const countItems = Object.entries(counts).map(([key, value]) => (
        <div className="col-4" key={key}>
            <p>
                <span className="number">{value}</span>
                <br />
                {key}
            </p>
        </div>
    ));

    return (
        <section className='banner_section'>
            <div className="upper_Banner">
                <div className="banner-img">
                    <img src={banner3} className="d-block w-100" alt="..." />
                </div>
                <div className="overlay">
                    <h4>Live the Experience</h4>
                    <h1>MAKE <br />YOURSELF <br />AT HOME</h1>
                    <Button ButtonName="View Our Rooms" />
                </div>
            </div>
            <div className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="about_content">
                                <Heading HeadingAfter="Our" HeadingBefore="History" />
                                <Paragraph 

                                paraFirstContent= "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."

                                paraSecondContent= "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"

                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 bg-whitesmoke">
                            <div className="about_image">
                                <div className="about_img">
                                    <img src={about_img} alt="" />
                                </div>
                                <div className="count_icons">
                                    <div className="row">
                                        {countItems}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="searchHotel">
                <div className="container">
                    <SearchHotel />
                </div>
            </div>
            <div className="areawiseHotel pt-5 pb-5">
                <AreawiseHotel />
            </div>
            <div className="top-rated-hotels">
                <div className="container">
                    <Heading HeadingAfter="Take a Dip at" HeadingBefore="These Top Rated Hotels" />
                    <div className="row">
                        <TopHotels />
                    </div>
                </div>
            </div>
            <div className="grand_regions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                        <Heading HeadingAfter="The Grand" HeadingBefore="Resions" />
                        <div className="imgDiv">
                          <img src={resion_img} alt="" /> 
                          <div className="imgSmallDiv">
                            <img src={resion_img_2} alt="" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-5 col-12">   
                            <div className="resions_content">
                            <Paragraph 

                                paraFirstContent= "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."

                                paraSecondContent= "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"

                                />
                                <p className='contactNumber mt-5 mb-4'>Call 41 (0)54 2344 00</p>
                                <Button ButtonName="Book Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grand_amenities pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12">
                        <Heading HeadingAfter="The Grand" HeadingBefore="Amenities" />
                        <div className="imgDiv">
                          <img src={resion_img} alt="" /> 
                          <div className="imgSmallDiv">
                            <img src={resion_img_2} alt="" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12 bg-white">   
                            <div className="resions_content">
                            <Paragraph 

                                paraFirstContent= "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket."

                                paraSecondContent= "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar"

                                />
                                <div className="row">
                                    <Services />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our_rooms mb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="roomsHeading">
                                <Heading HeadingAfter="Our Rooms" HeadingBefore="And Suits" />
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="roomsBotton">
                                <Button ButtonName="View Our Rooms" />
                            </div>
                        </div>
                    </div>
                    <RoomsAvail />
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div className="footer_content">
                                <div className="footer_img">
                                    <img src={logo} alt="" />
                                </div>
                                <p>Lalpur, Ranchi <br /> Jharkhand-834001 </p>
                                <p>91 987 654 0123 <br /> info@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div className="footer_content">
                               <h3>The Hotel</h3> 
                               <ul>
                                <li><a href="#">Rooms & Suits</a></li>
                                <li><a href="#">Experience</a></li>
                                <li><a href="#">Contact Us</a></li>
                               </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div className="footer_content">
                              <h3>Restaurant</h3>  
                              <ul>
                                <li><a href="#">Offer</a></li>
                                <li><a href="#">Job</a></li>
                                <li><a href="#">Seminar</a></li>
                              </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3">
                            <div className="footer_content">
                                <h2>"Offer more than a Gift Voucher, Gift and Experience"</h2>
                                <Button ButtonName="Book Now" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="endfooter">
                    <p>Copyright © 2024 Hotel.com ®</p>
                </div>
            </footer>
        </section>
    );
}

export default Body;
