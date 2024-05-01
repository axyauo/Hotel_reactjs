import React from 'react'
import BookNowButton from './BookNowButton'
import './ExclusiveRoom.css'
import { ExclusiveRoomData } from './ExclusivceRoomData'

let ExclusiveRoom = ()=> {
  return (
    <>
        {ExclusiveRoomData.map((item, index)=>(
            <div class="col-lg-6 col-md-6" key={index}>
              <div class="exclusive-wrap">
                <div class="row align-items-center">
                  <div class="col-lg-6 pr-0">
                    <div class="exclusive-img bg-3" style={{ backgroundImage: `url(${item.image})` }}></div>
                  </div>
                  <div class="col-lg-6 pl-0">
                    <div class="exclusive-content">
                      <h3>{item.roomType}</h3>
                      <p class="all-content-justify">{item.description}</p>
                      
                      <BookNowButton ButtonName="Book Now" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
        
    </>
  )
}
export default ExclusiveRoom;