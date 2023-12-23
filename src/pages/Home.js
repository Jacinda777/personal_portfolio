 import React from 'react';
 import Navbar from '../components/Navbar';
 import Footer from '../components/Footer';
 import './Home.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
function Home() {
   return (
     <div>
       <Navbar />
       <div className='about-container'>
       <div className="about" style={{textAlign:"center"}}>
         <h2>About Me</h2>
       </div>  
         <div className="project">
           <img className = 'profile' src="/images/3.jpg" alt="Jacinda" />
           <p>
           Hey, I'm Jacinda, an undergraduate student at UMaT. I'm into web development and robotics, experimenting with automation and AI. I like making websites look cool and secure. When I'm not coding, I'm exploring tech trends, trying new coding languages, or finding ways to solve a problem.
     </p>
   </div>
   </div>
   <div className='tab-container'>
    <div className='tab1-container'>
     <div className='tab1'>
       <h1 style={{textAlign:"center"}}>Education</h1>
       <ul>
         <li>
           <p>2022 - Current</p>
           <p>University of Mines and Technology(BSc. Cyber Security)</p>
         </li><br />
         <li>
           <p>2019 - 2022</p>
           <p>Mfantsiman Girls Senior High(General Science)</p>
           </li><br />
         <li>
         <p>2019 - 2017</p>
         <p>Oxford Kingdom International(Junior High)</p>
         </li><br />
       </ul>
         </div>
     </div>
     <div className='tab2-container'>
     <div className='tab2' style={{height:"70vh"}}>
       <h1 style={{textAlign:"center"}}>Skills</h1>
       <ul>
        <li>
         <p>Web Development(Frontend)</p>
         <p>Building websites(React JS,HTML,CSS and JavaScript)</p>
         </li>
         <li>
         <p>Robotics</p>
         <p>Building and Programming robots with arduino and raspberry.</p> 
         </li>
       </ul>
     </div>
     </div>
   </div>
    
       
       <div className='contact-container'>
       <div className="contact-me">
         <h2 style={{textAlign:"center"}}>Contact Me</h2>
       </div>
       <div className='contact'>  
         <p style={{ paddingLeft: "20px" }}>
           <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"25px"}} /><a href="mailto:jbiney777@gmail.com"> : jbiney777@gmail.com</a>
         </p>
         <p style={{ paddingLeft: "20px" }}>
           <FontAwesomeIcon icon={faSquareWhatsapp} style={{fontSize:"25px",color:"green"}} /> : +233 05051110357       </p>
           <p style={{ paddingLeft: "20px" }}>
           <FontAwesomeIcon icon={faLinkedin} style={{fontSize:"25px",color:"blue"}} /><a href="https://www.linkedin.com/in/jacinda-biney-210607292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "> : Jacinda Biney </a>
         </p>
       </div>
       </div>
       <Footer />
     </div>
   );
 }
export default Home;
