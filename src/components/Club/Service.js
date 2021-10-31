import React from 'react';

const Service = (props) => {
  const {name,name1,name2,name3, name4, name5, description, description1, description2, description3, description4,description5,img, img1, img2, img3, img4, img5} = props.service;
  
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
      <div className="wellness">
        <div className="img-div">
          <img className="wellness-img border-0" src={img4} alt="" /></div>
        <div className="text-div">
          <h2 className="about-title">{name4}</h2>
          <p>{description4}</p>
        </div>
      </div>
      <div className="wellness"> 
        <div className="text-div">
          <h2 className="about-title">{name5}</h2>
          <p>{description5}</p>
        </div>
        <div className="img-div">
          <img className="wellness-img border-0" src={img5} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Service;