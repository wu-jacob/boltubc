import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import styles from './css/header.css';
import logo from '../../images/logo/bolt.png';
import FadeShapes from '../../pages/About-page/about-page-components/fade-shapes/shapes';
import { motion } from "framer-motion"

function Header(props) {
    const logo_style = {
        width: '100px',
    };
    return (
        <div className="body-header">
            <div className="title-text-block">
            <div className='header-text'>
                <div className="header">
                    <motion.div
                        className="header"
                        initial={{ x: -200 }}
                        animate={{ x: 10 }}
                        transition={{ duration: 1.5, type: "spring" }}>
                        <img src={logo} style={logo_style} />
                        <div className="title">
                            {props.title}
                        </div>
                    </motion.div>
                </div>
                <div className="title-text one">
                    {props.titleLineOne}
                </div>
                <div className="title-text">
                    {props.titleLineTwo}
                </div>
                </div>
            </div>
            <FadeShapes />
            <Navbar />
        </div >
    );
}

export default Header;