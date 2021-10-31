import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const Manage = (props) => {
  const{_id, name, email, item, status}=props.event;
  

  const deleteBooking=(id)=>{
    const proceed= window.confirm('Are you sure to delete?');
    if(proceed){
     const url=`http://localhost:5000/myBooking/${id}`
     fetch(url,{
       method: 'DELETE',
 
     })
     .then(res=>res.json())
     .then(data=>{
       if(data.deletedCount> 0){
         alert('Delete Successfully')
         window.location.reload()
       }
     })
 
 console.log(id)
    }
   }

   
   const updateStatus = (id)=>{   
    console.log(id)
   }



  return (
    <div>
    <Card className="d-block mx-auto mb-4 manage border-5 " style={{ width: '80rem' }}>
  <ListGroup variant="flush" className="fw-bold">
    <ListGroup.Item>Customer Name- {name}</ListGroup.Item>
    <ListGroup.Item>Customer Email- {email}</ListGroup.Item>
    <ListGroup.Item>Booked- {item}</ListGroup.Item>
    <ListGroup.Item>Status- {status}</ListGroup.Item>
    <button onClick={()=>deleteBooking(_id)} className="booked-btn d-inline w-50">Delete</button>
    <button onClick={()=>updateStatus(_id)} className="booked-btn d-inline w-50 mt-3">Update Status</button>
  </ListGroup>
</Card>
    </div>
  );
};

export default Manage;