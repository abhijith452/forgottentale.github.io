import React from 'react';
import pic from './assets/pic.jpg';
import './css/about.css';

 function About(){
     return(
         <div className="About" id="About">
             <div className="abouttext">
                 <h3 data-aos="fade-down"><span>About Me</span></h3>
                 <p data-aos="fade-right">An undergraduate electrical and electronic engineering student, Microsoft Student Partner 2019-20 whose in the quest to find or make something new thats creative and extraordinary. Being a tech nerd myself, i always love computer technology ,science and infinity. I also make music, love to do vfx and much more</p>
             </div>
             <img src={pic} data-aos="fade-left" alt="IMAGE"></img>

         </div>
     )
 } 

 export default About;