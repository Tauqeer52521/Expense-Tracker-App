import Layout from "../components/Layout/Layout";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './contactus.css';
import { useState } from "react";
import { Link } from "react-router-dom";


const Contactus=()=>{
  localStorage.setItem('active',1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange=name=>e=>{
   setFormData({...formData,[name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


    return(
      <Layout>
        <div className="contact-box">
            <h1 style={{color:'#EF360D'}}>Contact Us</h1>
    <div className="contact-container">
     
      <div className="contact-info">
        <div className="contact-item">
         <Link to="/google-map" className="map-link">
           <div><FaMapMarkerAlt className="contact-icon" /></div>
            <div style={{color:'gray'}}>MNNIT Allahabad,</div>
            <div style={{color:'gray'}}>Teliarganj</div>
          </Link> 
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>info@example.com</p>
        </div>
      </div>
      <div className="contact-form-container">
  <form action="https://formspree.io/f/mleqoedk" method="POST" className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Enter your name" value={formData.name}
            onChange={handleChange('name')} required/>
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Enter your email" value={formData.email}
            onChange={handleChange('email')} required/>
        </div>
        <div className="form-group">
            <textarea name="message" placeholder="Enter your query" value={formData.message}
            onChange={handleChange('message')} required></textarea>
        </div> 
      <button type="submit" onSubmit={handleSubmit}>Send Me Feedback</button>
  </form>
    </div>
    </div>
   </div>
</Layout>
    );
}

export default Contactus;



/*
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Enter your feedback"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;


*/