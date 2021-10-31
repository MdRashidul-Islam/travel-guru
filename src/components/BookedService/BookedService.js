import React from 'react';
import './BookedService.css'
import { Card, CardGroup } from 'react-bootstrap';



const BookedService = (props) => {
  console.log(props.order)
  const {_id, name, address, email, img, item, price, status}= props.order;

  const handleDelete=(id)=>{
   const proceed= window.confirm('Are you sure to delete?');
   if(proceed){
    const url=`https://frightening-hollow-48325.herokuapp.com/myBooking/${id}`
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


   }
  }




  return (

    <div>
<CardGroup className="booked-service">
  <Card>
    <Card.Img variant="top" src={img} height="200px" />
    <Card.Body>
      <Card.Title>{item}</Card.Title>
      <Card.Title>Price-{price}</Card.Title>
      <Card.Text>
        User info <br />
        Name: {name} <br />
        Email: {email} <br />
        Address: {address} <br /> 
        Status: {status}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <button className="booked-btn" onClick={()=>handleDelete(_id)}>Cancel Booking</button>
    </Card.Footer>
  </Card>
 
</CardGroup>
    </div>
  );
};

export default BookedService;