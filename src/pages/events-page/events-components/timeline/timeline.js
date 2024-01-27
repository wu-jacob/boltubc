import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Dots from '../dots/dots';
import Dates from '../dates/dates';
import Info from '../info/info';
import "./timeline.css";
import JoinUs from '../../../Home/components/JoinUs/JoinUs';

function Timeline() {
    // var myElement = document.getElementById("uwu");
    // var yPos = myElement.offsetTop;
    return (
        <div className="everything">
            <div>
                <motion.div className="line"
                    initial={{
                        height: '0px'

                    }}
                    animate={{
                        height: 2400,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',

                    }}
                >
                </motion.div>
            </div>
                
                <div style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                
                <Dots style={{position: 'relative', top: '300px'}} />

                    
                <Dates multiplyer={300-58} date="Feb 3, 2024"/> 
  
                    
                <Info multiplyer={300-58} image="7" title="Bolt Launchpoint" description="BOLT Launchpoint is an event centered around helping students in their career search as this is students current top priority. Students are seeking advice and guidance and BOLT is pairing students together with industry professionals and experienced studetns who have gone through the application process, this is an opportunity for companies to promote themselves and students to find out who to write resumes, cover letters, succeed in the interview and make themselves stand out."/>
                

                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Nov 29, 2023"/> 
                <Info multiplyer={300-58} image="6" title="November Workshop" description="Get ready for 𝗕𝗢𝗟𝗧 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽𝘀 — your destination for diving into the world of marketing analytics! This is a chance to gain direct access to industry pros ranging from Marketing Analysts, Digital Strategists, to Marketing Technology Specialists—get insights and explore career paths. Also, you can expand your professional network within the marketing analytics sphere"/>

                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Oct 21, 2023"/> 
                <Info multiplyer={300-58} image="1" title="Bolt Connect" description="Get ready for 𝗕𝗢𝗟𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧 —your ultimate networking destination! Forge lasting professional connections and gain direct access to industry pros ranging from Data Engineers, Senior Analysts, to Data & AI Engineering Consultants. This is a great opportunity to get insights and explore career paths and expand your LinkedIn network! "/>
            
                <div style={{height: '300px', width: '100%'}}></div>
                <Dots style={{position: 'relative', top: '300px'}} />
                <Dates multiplyer={300-58} date="Sept 23-30, 2023"/> 
                <Info multiplyer={300-58} image="3" title="First Byte" description="BOLT UBC presents '𝗙𝗶𝗿𝘀𝘁 𝗕𝘆𝘁𝗲 𝟮𝟬𝟮𝟯' - your gateway to the world of data analytics! Whether you're a newbie or just curious, this beginner-focused data analytics themed case competition is your chance to learn, connect, and compete!"/>
            
            </div>
            <div style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
    
}

export default Timeline;
{/* <div style={{height: '300px', width: '100%'}}></div>
<Dots style={{position: 'relative', top: '300px'}} />
<Dates multiplyer={300-58} date="Sept 12-16, 2023"/> 
<Info multiplyer={300-58} image="4" title="Bizweek" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

<div style={{height: '300px', width: '100%'}}></div>
<Dots style={{position: 'relative', top: '300px'}} />
<Dates multiplyer={300-58} date="Mar 17-26, 2023"/> 
<Info multiplyer={300-58} image="5" title="Bolt Bootcamp" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/> */}
