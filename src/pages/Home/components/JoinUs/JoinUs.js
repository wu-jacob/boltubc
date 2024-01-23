import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import boltrocket from '../../../../images/logo/boltRocket.png';
function JoinUs() {

    return (


        <div className='joinusborder'>
            <a href=" https://docs.google.com/forms/d/e/1FAIpQLScGMtIY9xvBwmxM-29JsCiem7Mqpx6H7qAZCiVEq7i5amVK-w/viewform" target='blank' style={{ textDecoration: 'none' }}>
                <div className='joinButton'>
                    Join Bolt
                </div>
            </a>
        </div >

    );
}

export default JoinUs;
