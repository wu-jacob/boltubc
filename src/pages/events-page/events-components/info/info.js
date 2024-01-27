import style from './style.css'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.png';

// needs to take name, picture, and title as props
// display the card with the picture as the logo, and the name and title following it

function Info({ image, description, multiplyer, title }) {
    var img = '';
    switch (image) {
        case "1":
            img = img1
            break;
        case "2":
            img = img2
            break;
        case "3":
            img = img3
            break;
        case "4":
            img = img4
            break;
        case "5":
            img = img5
            break;
        case "6":
            img = img6
            break;
        case "7":
            img = img7
            break;

    }

    const posY = String(multiplyer + 15) + 'px';
    return (
        <div className='positioning'>
            <div className='positioning2'
                style={{
                    position: 'relative',
                    top: posY, 
                    display: 'flex',
                }}
            >
                <div className='info-img'>

                    <motion.div className='imgBorder'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                            visible: { opacity: 1, left: '0' },
                            hidden: { opacity: 0, left: '-20px' }
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.2,
                            ease: 'easeIn'
                        }}
                        exit={{
                            delay: 0,
                            opacity: '0',
                        }}
                    >
                        <img src={img} style={{ width: '100%'}} className="left-img"/>
                    </motion.div>
                    <motion.div className='contentBorder'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                            visible: { opacity: 1, left: '0' },
                            hidden: { opacity: 0, left: '-20px' }
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.3,
                            ease: 'easeIn'
                        }}
                        exit={{
                            opacity: '0',
                        }}
                    >
                        <div className="info">
                            <h1 className="info-h">{title}</h1>
                            <p className="info-p">{description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Info;

