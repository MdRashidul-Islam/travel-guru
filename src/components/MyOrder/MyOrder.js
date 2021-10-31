import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookedService from '../BookedService/BookedService';

const MyOrder = () => {
  const {user}=useAuth();
  const [orders, setOrders]= useState([]);
  
  
  useEffect(()=>{
    fetch(`https://frightening-hollow-48325.herokuapp.com/myBooking/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.length){
        setOrders(data)
        
      }
     
    })
  },[user.email])



  return (
    <div className="addService">
      <h3 className="text-center fw-bold pb-3 about-title">TOTAL BOOKING: {orders?.length}</h3>
      <div className='rooms container'>
      {
        orders?.map(order =><BookedService key={order._id} order={order}></BookedService>)
      }
      </div>
     

    </div>
  );
};

export default MyOrder;