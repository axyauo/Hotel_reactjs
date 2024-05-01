import React, { useState } from 'react';
import './BookHotel.css';
import BookNowButton from './Hotels/BookNowButton';

const BookHotel = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, mobile, location, checkInDate, checkOutDate, guests, access_key: "7b243b8b-c260-47cb-8de4-deeedf03a1f9" };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        // Reset form fields after successful submission
        setName('');
        setMobile('');
        setLocation('');
        setCheckInDate('');
        setCheckOutDate('');
        setGuests(1);
      } else {
        console.error("Submission failed:", data);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="search-container">
      <form className='row' onSubmit={handleSubmit}>
        <div className="col-lg-10 col-12">
          <div className="row">
            <div className="form-group col-lg-2 col-md-3 col-6">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group col-lg-2 col-md-4 col-6">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="form-group col-lg-2 col-md-4 col-6">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, landmark, or hotel name"
                required
              />
            </div>
            <div className="form-group col-lg-2 col-md-4 col-6">
              <label htmlFor="checkInDate">Check-in Date:</label>
              <input
                type="date"
                id="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-lg-2 col-md-4 col-6">
              <label htmlFor="checkOutDate">Check-out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-lg-2 col-md-4 col-6">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                min="1"
                max="10"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-12">
            <BookNowButton ButtonName= "Book Now" />
        </div>
      </form>   
    </div>
  );
};

export default BookHotel;
