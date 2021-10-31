import React from 'react';
import './Wellness.css'

const DisplayWellness = (props) => {
  const {name,name1,name2,name3, description, description1, description2, description3, img, img1, img2, img3} = props.service;
 
  return (
    <div>
      <div className="wellness">
        <div className="img-div">
          <img className="wellness-img border-0" src={img} alt="" /></div>
        <div className="text-div">
          <h2 className="about-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="wellness">
        
        <div className="text-div">
          <h2 className="about-title">{name1}</h2>
          <p>{description1}</p>
        </div>
        <div className="img-div">
          <img className="wellness-img border-0" src={img1} alt="" /></div>
      </div>
      <div className="wellness">
        <div className="img-div">
          <img className="wellness-img border-0" src={img2} alt="" /></div>
        <div className="text-div">
          <h2 className="about-title">{name2}</h2>
          <p>{description2}</p>
        </div>
      </div>
      <div className="wellness">
        
        <div className="text-div">
          <h2 className="about-title">{name3}</h2>
          <p>{description3}</p>
        </div>
        <div className="img-div">
          <img className="wellness-img border-0" src={img3} alt="" />
          </div>
      </div>
    </div>
  );
};

export default DisplayWellness;