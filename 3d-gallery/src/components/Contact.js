import React from "react";
import "./ContactForm.css";
import img from './images (1).jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="contact-title">
            Let's Get in <span className="highlight">Touch!</span>
          </h1>
          <p className="contact-description">
            Have a question or need assistance? Reach out via email, phone, or the contact form below. We’re eager to assist you!
          </p>
          <p className="contact-note">Nice hearing from you!</p>
          <img src={img} alt="contactus"></img>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <label>Full Name:</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message:</label>
            <textarea rows="4" placeholder="Your message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact-info">
          <div>
            <h2>Head Office:</h2>
            <p><FaPhone /> +447473997191</p>
            <p><FaEnvelope /> sybxekdesigns@gmail.com</p>
            <p><FaMapMarkerAlt /> 2068 Boulevard Henri, Bourassa Est</p>
          </div>
          <div>
            <h2>Branch Office:</h2>
            <p><FaPhone /> +447473997191</p>
            <p><FaEnvelope /> sybxekdesigns@gmail.com</p>
            <p><FaMapMarkerAlt /> 2068 Boulevard Henri, Bourassa Est</p>
          </div>
        </div>
        <div className="contact-icons">
          <FaFacebook className="icon" />
          <FaWhatsapp className="icon" />
          <FaTelegram className="icon" />
        </div>
      </footer>
    </div>
  );
};

export default Contact;