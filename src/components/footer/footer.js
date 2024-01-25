import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "./footer.css"; 



export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="socials-col">
          <h4>Follow Us</h4>
          <div className="socials-row">
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/">
            <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/">
            <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
