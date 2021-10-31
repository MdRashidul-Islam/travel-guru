import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import './Home.css'
import Room from '../Room/Room';


const Home = () => {

  const [rooms, setRooms]= useState([])
  useEffect(() =>{
    fetch('http://localhost:5000/rooms')
    .then(res=>res.json())
    .then(data =>{
      if(data.length){
        setRooms(data)
      }
      if(!data.length){
        
      }
    })
  },[])



  return (
    <div>
      <div className="carouser">
      <Carousel>
  <Carousel.Item>
    <img
      height="650px"
      className="d-block w-100"
      src="https://i.ibb.co/ngHVxYN/Deluxe-Queen-revised.jpg
      "
      alt="First slide"
    />
    <Carousel.Caption className="text-black fw-bold">
      <h3>Create Exclusive Deals for Hotel Guests</h3>
      <p>If you are using text messaging to reach hotel guests, create deals that are exclusive only to those that ha text to those staying in a standard room and offer an upgrade at a discount. When you use the right technology in your hotel, you can reach the right guests easily.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     height="650px"
      className="d-block w-100"
      src="https://i.ibb.co/hCsvJsL/junior-suite-1.jpg
      "
      alt="Second slide"
    />

    <Carousel.Caption className="text-black fw-bold">
      <h3>Confirm Reservations Through Text Messaging</h3>
      <p>When a hotel guest makes a reservation at your hotel, a quick text message to confirm their reservation will make guests feel confident in their reservations. You can also send out a message the day before your guest.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     height="650px"
      className="d-block w-100"
      src="https://i.ibb.co/QcKJgL4/RCBANGA-00003-conversion.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className="text-black fw-bold">
      <h3>Get Customer Feedback</h3>
      <p>To gather valuable feedback from your guests, you can send out a survey through text messaging to make it easy for guests to provide information regarding their stay. Customers waiting at the airport can fill out a survey easily when they receive a text message.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

      <h1 className="text-center fw-bold p-3 about-title">ROOMS</h1>
     {rooms.length ===0 ?
        <Spinner className="mx-auto d-block fs-4 p-5 m-5" animation="border" variant="danger" />
     :
      <div className='rooms container'>
        {
          rooms.map(room=><Room key={room._id} place={room}></Room>
          )
        }
      </div>}
    </div>
  );
};

export default Home;