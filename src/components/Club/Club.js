import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from './Service';

const Club = () => {
  const [services, setServices]= useState([]);
  useEffect(()=>{
    fetch('https://frightening-hollow-48325.herokuapp.com/club')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
   <div>
      {services.length===0 ?
      <Spinner className="mx-auto d-block fs-4 p-5 m-5 pt-5" animation="border" variant="danger" />
      :
      <div className="wellness-container">
       {
        services.map(service => <Service key={service._id} service={service}></Service>)
      }
    </div>}
   </div>
  );
};

export default Club;