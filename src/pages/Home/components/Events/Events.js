import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import style from './style.css';
import ScrollAnimation from '../../../../styles/ScrollAnimation.css';
import networking from './images/networking.jpg';
import eventBOlt from './images/boltEvent.png';

import img1 from '../../../events-page/images/1.jpg';
import img2 from '../../../events-page/images/2.jpg';
import img3 from '../../../events-page/images/3.jpg';
import img4 from '../../../events-page/images/4.jpg';
import img5 from '../../../events-page/images/5.jpg';
import img6 from '../../../events-page/images/6.jpg';


function Events() {


    return (
        <div className='eventPageBorder'>
            <div className='PaddingEvents'>
                <motion.h1
                    className='OurEvents'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}
                >Our Events
                </motion.h1>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img1} style={{ width: '100%' }} />
                    </div>
                    <div >
                        <p className='eventTitle'>Bolt Connect</p>

                        <p className='eventContent'>Get ready for 𝗕𝗢𝗟𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧 —your ultimate networking destination! Forge lasting professional connections and gain direct access to industry pros ranging from Data Engineers, Senior Analysts, to Data & AI Engineering Consultants. This is a great opportunity to get insights and explore career paths and expand your LinkedIn network! </p>
                    </div>
                </motion.div>
                <br></br>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img6} style={{ height: '100%' }} />
                    </div>
                    <div>
                        <p className='eventTitle'>November Workshop</p>

                        <p className='eventContent'>Get ready for 𝗕𝗢𝗟𝗧 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽𝘀 — your destination for diving into the world of marketing analytics! This is a chance to gain direct access to industry pros ranging from Marketing Analysts, Digital Strategists, to Marketing Technology Specialists—get insights and explore career paths. Also, you can expand your professional network within the marketing analytics sphere</p>
                    </div>
                </motion.div>
                <br></br>
                <motion.div className='eventBorder'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
                        hidden: { opacity: 0, left: '-50px' }
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        left: '0'
                    }}>
                    <div className='eventImg'>
                        <img src={img3} style={{ height: '100%' }} />
                    </div>
                    <div>
                        <p className='eventTitle'>First Byte</p>

                        <p className='eventContent'>BOLT UBC presents '𝗙𝗶𝗿𝘀𝘁 𝗕𝘆𝘁𝗲 𝟮𝟬𝟮𝟯' - your gateway to the world of data analytics! Whether you're a newbie or just curious, this beginner-focused data analytics themed case competition is your chance to learn, connect, and compete!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Events;
