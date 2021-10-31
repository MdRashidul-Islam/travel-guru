import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Manage from './Manage';
import './ManageBooking.css'

const ManageBooking = () => {
  
  const [addEvent, setAddEvent]= useState([]);

   useEffect(()=>{
    fetch(`http://localhost:5000/myBooking`)
    .then(res=>res.json())
    .then(data=>setAddEvent(data))
  },[])

  return (
    <div className="custom-class addService">
      <h1 className="about-title text-center">TOTAL BOOKING- {addEvent.length}</h1>
      <div>
        {
          addEvent.map(event=> <Manage  key={event._id} event={event}></Manage>)
        }
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default ManageBooking;