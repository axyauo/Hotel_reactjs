import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Hotel01.css'; 
import slide1 from '../Images/Slider1.webp';
import slide2 from '../Images/Slider2.webp';
import slide3 from '../Images/Slider3.webp';
import BookHotel from './BookHotel';
import BookNowButton from './BookNowButton';
import aboutImg from '../Images/img-1.jpg';
import { FacilityBox } from './FacilityBox';
import ExclusiveRoom from './ExclusiveRoom';
import ResturantArea from './ResturantArea';
import { Testimonial } from './Testimonial';
import footerShape from '../Images/white-shape-bottom.png'

export default function Hotel01() {
  return (
    <>
    {/* <section className='TopNavigation'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="logoName">
                <h3>Archie Residency</h3>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="info">
                <div className="contact">
                  <p>
                    <i className='bx bxs-phone-call'></i> 
                    <a href="tel:+919798171404">+91 9798171404</a> 
                  </p>
                </div>
                <div className="contact">
                  <p>
                    <i className='bx bx-envelope'></i> 
                    <a href="mailto:thb2.hospitalitymgt@gmail.com">thb2.hospitalitymgt@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='NavigationBaar'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Room</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Royal Banquet Hall</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Arch Resturant</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Gallery</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section> */}
      <section className="carouselBanner">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img src={slide1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-md-block left-slide">
                <p>Step Into a World of Comfort and Luxury. Our Rooms Await Your Arrival</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img src={slide2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-md-block right-slide">
                <p>Let Your Event Shine in Our Beautiful, Customizable Banquet Space</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img src={slide3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-md-block left-slide">
                <p>Crafting Flavours, Creating Memories. Book Your Table at Our Restaurant</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="bookingHotel">
        <div className="container">
          <BookHotel /> 
        </div>
      </section>
      <section className="abouthotel mt-5 mb-5">
        <div className="container">
          <div className="section-title">
            <span>About</span>
            <h2>Archie Regency</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="explore-content mr-30">
                <p className="all-content-justify">Our room’s services are open 24 hours to satisfy the late night cravings of our guest. Our whole property is fully air-conditioned within which we have 2 Banquet halls with the best of the audio-visual facility to meet the conferencing needs of your guest. In addition to all this, we offer a business center fully equipped with Computerized, Internet, Fax and Printer service. Further, we also offer laundry, Doctor on call, and travel desk services to your guests We have taken extra care to enhance the comfort of our guest.</p>
                <p className="all-content-justify">Boutique hotels are known for their individualistic style, often showcasing unique architecture, interior design, and thematic elements. We tend to be aesthetically appealing and offer a distinct ambiance, setting them apart from chain hotels. From décor to amenities, boutique hotels pay attention to detail. We often provide upscale or unique amenities, such as luxury bedding, artisanal toiletries, and specialized services to create a more memorable experience. Regular cleaning and maintenance of the room, including changing linens, replenishing toiletries, vacuuming, and ensuring the overall tidiness and cleanliness of the space.</p>
                <BookNowButton ButtonName="Read More" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="explore-img explore-img-two">
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="facilities-area mt-5 mb-5">
        <div class="container">
          <div class="section-title">
            <span>Facilities</span>
            <h2>Giving Entirely Awesome</h2>
          </div>
          <div class="row">
            <FacilityBox />
          </div>
        </div>
      </section>
      <section class="exclusive-area exclusive-area-two pt-3 pb-3">
        <div class="container">
          <div class="section-title">
            <span>Rooms</span>
            <h2>You can get an exclusive Rooms</h2>
          </div>
          <div class="row">
            <ExclusiveRoom />
          </div>
        </div>
      </section>
      <section class="restaurants-area_ pb-3">
          <div class="container-fluid px-0">
              <div class="section-title">
                  <h2>The Area We Cover Under<br /> Archie Regency</h2>
              </div>
              <div class="row">
                <ResturantArea />
              </div>
          </div>
      </section>
      <section class="testimonials-area pb-3 mt-5 mb-5">
        <div class="container">
            <div class="section-title">
                <span>Testimonials</span>
                <h2>What customers say</h2>
            </div>
            <div class="testimonials-wrap">
               <Testimonial />
            </div>
        </div>
      </section>
      <footer class="footer-top-area footer-top-area-two pt-3">
        <div class="container">
          <div class="footer-middle-area">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-widget">
                  <h3>About Us</h3>
                  <p align="justify">Our room’s services are open 24 hours to satisfy the late night cravings of our guest. Our whole property is fully air-conditioned within which we have 2 Banquet halls with best of the audio-visual facility to meet the conferencing needs of your guest.</p>
                  <ul class="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                      <i class='bx bxl-facebook-circle'></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                      <i class='bx bxl-instagram' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                      <i class='bx bxl-youtube' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                      <i class='bx bxl-linkedin-square' ></i>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="./index.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="./about-us.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="./rooms.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Rooms
                      </a>
                    </li>
                    <li>
                      <a href="./royal-banquet-hall.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Royal Banquet Hall
                      </a>
                    </li>
                    <li>
                      <a href="./arch-restaurant.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Arch Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="./gallery.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-widget">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <a href="./faq.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Booking
                      </a>
                    </li>
                    <li>
                      <a href="./contact-us.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="./terms-and-conditions.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="./privacy-policy.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="./refund-policy.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget cont-wdgt">
                  <h3>Contact Us</h3>
                  <ul class="information">
                    <li class="address">
                    <i class='bx bx-current-location' ></i>
                      <span>Address</span>
                      Near Yogda Ashram, Ranchi Railway Station Road , Siromtoli Chowk , Ranchi-834001
                    </li>
                    <li class="address">
                    <i class='bx bx-phone' ></i>
                      <span>Phone</span>
                      <a href="tel:+882-569-756">
                        +91 0651-3502730/3502731
                      </a>
                    </li>
                    <li class="address">
                    <i class='bx bx-envelope' ></i>
                      <span>Email</span>
                      <a href="">
                        </a><a href="mailto:thb2.hospitalitymgt@gmail.com">thb2.hospitalitymgt@gmail.com</a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom-area">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="copy-right">
                  <p>Copyright 2024 <a href="index.php" class="fw-bold">Hotel Archie Regency</a>. All Rights Reserved</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="designed">
                  <p>Designed By <a href="https://jharkhanditservices.com/" class="fw-bold" target="_blank">Jharkhand IT Services Software Private Limited</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-shape">
          <img src={footerShape} alt="Image" />
        </div>
      </footer>

    </>
  );
}
