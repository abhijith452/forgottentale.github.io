import React from 'react';
import myPhoto from './assets/pic.jpg';
import './css/about.scss';

 function About(){
     return(
         <div className="about" id="About">
             <div className="about__text">
                 <h3 className="about__text__title"><span>About Me</span></h3>
                 <p  className="about__text__des">An undergraduate electrical and electronic engineering student, Microsoft Student Partner 2019-20 whose in the quest to find or make something new thats creative and extraordinary. Being a tech nerd myself, i always love computer technology ,science and infinity. I also make music, love to do vfx and much more</p>
             </div>
             <img src={myPhoto} alt = "alt" className="about__pic" />
         </div>
     )
 } 

 export default About;