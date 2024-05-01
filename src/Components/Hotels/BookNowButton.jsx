import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './BookNowButton.css';

let BookNowButton = ({ButtonName}) => {
  return (
    <div className="check-btn check-content mb-0">
      <button className="default-btn" type="submit" name="submit">
        {ButtonName}
        <i className='bx bx-right-arrow-alt'></i>
      </button>
    </div>
  );
};

export default BookNowButton;
