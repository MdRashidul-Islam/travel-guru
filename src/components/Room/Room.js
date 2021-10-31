import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Room.css'

const Room = (props) => {
  const {_id, name, img}= props.place;

  
  return (
    <div>
       <CardGroup className="room">
  <Card>
    <Card.Img variant="top" src={img} height="200px" />
    <Card.Body>
      <Card.Title className="text-danger">{name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <Link className="link-btn" to={`/booking/${_id}`}> <button className="booked-btn">BOOKING NOW</button></Link>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  );
};

export default Room;