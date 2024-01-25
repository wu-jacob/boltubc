import React, { useState } from 'react';
import './css/ContactPage.css'; 
import Header from '../header-about/header'
import dog from '../../images/logo/bolt_dog_no_background.png'

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-body'>
    <Header title="Contact Us" titleLineOne="Leave us a message!" titleLineTwo=""/>
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label" htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="message">Message:</label>
          <textarea
            className="textarea"
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ContactPage;
