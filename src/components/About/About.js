import React from 'react';
import './About.css'
import aboutImg from '../../images/depositphotos_25590799-stock-photo-about-us.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img className="about-img" src={aboutImg} alt="" />
      </div>
      <div className="about-info">
        <h2 className="about-title">About US</h2>
        <p>Artesian is a beautiful hotel & resorts template pack designed to make WordPress websites for hotels, resorts, apartments, room reservations, restaurants, or any business involved in the tourism industry. It can be used for a bed and breakfast website, spa centers, and other services as well.Artesian is a beautiful hotel & resorts template pack designed to make WordPress websites for hotels, resorts, apartments, room reservations, restaurants, or any business involved in the tourism industry. It can be used for a bed and breakfast website, spa centers, and other services as well.</p>
        <button className="booked-btn">Connect With US</button>
      </div>
      
    </div>
  );
};

export default About;