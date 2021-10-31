import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../hooks/useAuth';

const Booking = () => {
  const {user}= useAuth();
  const {roomId}= useParams();
    const [roomDetails, setRoomDetails]= useState({});

    

    useEffect(()=>{
      fetch(`http://localhost:5000/rooms/${roomId}`)
      .then(res=>res.json())
      .then(data=>setRoomDetails(data))
    },[])


   
  // react hook form
  
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = data => {
    data.status= 'Panding';
    data.price=roomDetails?.price;
    data.email=user?.email
    data.img= roomDetails?.img;
    data.item=roomDetails?.name;
    
    
    fetch("http://localhost:5000/myBooking", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      
      if(result.insertedId){
        alert('Booking successfully')
      }
      reset()
    })
    console.log(data)
  };

 


  return (
    <div>
      <div className="booking  wellness-container">
     <div className="booking-info"> 
       <CardGroup>
  <Card className="border-0">
    <Card.Img className="booking-img"  src={roomDetails.img}  />
    <Card.Body className="cart-info" >
      <Card.Title className="fs-3 fw-bold text-primary">{roomDetails.name}</Card.Title>
      <Card.Text>
      {roomDetails.description}
      </Card.Text>
      <Card.Text className="fs-4 fw-bold text-primary">
      Price: {roomDetails.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     {/* <Link to={`/booking/${_id}`}> <button>Book{name}</button></Link> */}
    </Card.Footer>
  </Card>
</CardGroup>
</div>



<div className="user-info">
<form className="place-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      <textarea {...register("address")} placeholder="Address" />
      <input className="booked-btn w-100" type="submit" value="PlaceOrder" />
    </form>



</div>



    </div>
    </div>
  );
};

export default Booking;