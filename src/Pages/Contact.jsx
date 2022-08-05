import React from "react";
import "../style/Contact.css";
import { NavLink } from "react-router-dom";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"

function Contact() {
  const showAlert = ()=>{
    console.log("show Alert")
    
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-head-container common-head">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form-container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={showAlert}>Submit</button>
      </div>
      <div className="social-logo-container">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
      </div>
    </div>
  );
}

export default Contact;
