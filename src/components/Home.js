import React from 'react';
import './css/home.css'
import pic from './pic.png'

function Home() {
  return (
    <div className="Home">

     <div className="nav">
         <h4>Abhijith kannan</h4>
         <ul>
             <li><a href ="#">Home</a></li>
             <li><a href ="#">Projects</a></li>
             <li><a href ="#">Positions</a></li>
             <li><a href ="#">Blog</a></li>
             <li><a href ="#">About</a></li>
             <li><a href ="#">Contact</a></li>
         </ul>
         </div> 
       <div className="creator">
           <img src= {pic}></img>
           <h3>I'm Abhijith</h3>
           <p>Web Developer</p>
           <div className="socials">
      
               <a href="https://www.linkedin.com/in/forgottentale/">
                   <i class="fab fa-linkedin  social-links" aria-hidden="true"></i>
                   </a>
               <a href="https://www.facebook.com/abhijith.kannan.98">
                   <i class="fab fa-facebook-square  social-links" aria-hidden="true"></i>
                   </a>
               <a href="https://github.com/ForgottenTale">
                   <i class="fab fa-github  social-links" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/the_forgotten_tale/"><i class="fab fa-instagram  social-links" aria-hidden="true"></i>
               </a>
               <a href="https://twitter.com/abhijit77542829">
                   <i class="fab fa-twitter-square  social-links" aria-hidden="true"></i>
                   </a>
               
               
           </div>  
     </div>
    </div>
  );
}

export default Home;