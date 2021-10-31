import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import DisplayWellness from './DisplayWellness';

const WELLNESS = () => {
  const [services, setServices]= useState([]);
  useEffect(()=>{
    fetch('https://frightening-hollow-48325.herokuapp.com/wellness')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
      {services.length===0?
      <Spinner className="mx-auto d-block fs-4 p-5 m-5 pt-5" animation="border" variant="danger" />
      :
      <div className="wellness-container">
      {
        services.map(service => <DisplayWellness key={service._id} service={service}></DisplayWellness>)
      }
    </div>}
    </div>
  );
};

export default WELLNESS;