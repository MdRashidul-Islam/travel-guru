import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddService.css'


const AddService = () => {
  const {user} = useAuth();
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = data => {
    data.email=user?.email;
    
    fetch("https://frightening-hollow-48325.herokuapp.com/rooms", {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.insertedId){
        alert('Service Added Successfully');
        reset()
      }
    })
    console.log(data)
  };


  return (
    <div className="addService">
      <h3 className="text-center fw-bold about-title">Add New Service</h3>

      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      <input {...register("img")} placeholder="Img-url" />
      <input {...register("price")} placeholder="Price" />
      <textarea {...register("description")} placeholder="Description" />
      <input className="w-75 mx-auto booked-btn " type="submit" value="ADD NEW SERVICE" />
    </form>
    </div>
  );
};

export default AddService;