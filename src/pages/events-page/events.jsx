
import "./events-css/events.css";
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../components/navbar/navbar.js";
import Timeline from "./events-components/timeline/timeline.js";
import Header from "../../components/header-about/header";
export default function Event() {
    changeBackgroundColor();
    window.onscroll = changeBackgroundColor;
    return (
        <Container>
            <Row>
                <Col>
                    <div className="event-page" style={{ width: '100%', height: '100%', position: 'absolute', marginTop: '100px', marginBottom: "200px" }}>
                        <Header className="header" title="Events" titleLineOne="" titleLineTwo=""/>
                        <Navbar />
                        <Timeline />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

// document.addEventListener("DOMContentLoaded", function() {
function changeBackgroundColor() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollPosition < 0.4*window.innerHeight) {
      document.body.style.backgroundColor = 'white'; // Section 1 color
    } else if (scrollPosition < 1.6*window.innerHeight) {
      document.body.style.backgroundColor = '#f3deff'; // Section 2 color
    } else if (scrollPosition < 2.4*window.innerHeight) {
      document.body.style.backgroundColor = '#d5c7ff'; // Section 3 color
    }
  }
// }/
