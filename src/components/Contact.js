import React from 'react';
import './css/contact.css';

function Contact() {
  return (
    <div className="Contact">
   <form>
     <h3><span>Contact Me</span></h3>
      <div className="email">
      <input type = "text" placeholder = "Your Name"></input>
       <input type = "email" placeholder = "Your E-mail"></input>
       </div> 
       <input type = "text" placeholder = "Subject"></input>
       <textarea placeholder ="Message"></textarea>
       <button>Sent</button>
   </form>
   <div className="socials">
     <h4>Socials Links</h4>
     <div className="links">
      <a href="https://www.linkedin.com/in/forgottentale/"><i className="fab fa-linkedin fa-2x social-links"></i></a>
      <a href="https://www.facebook.com/abhijith.kannan.98"><i className="fab fa-facebook-square fa-2x social-links"></i></a>
      <a href="https://github.com/ForgottenTale"><i className="fab fa-github fa-2x social-links"></i></a>
      <a href="https://www.instagram.com/the_forgotten_tale/"><i className="fab fa-instagram fa-2x social-links"></i></a>
      <a href="https://twitter.com/abhijit77542829"><i className="fab fa-twitter-square fa-2x social-links"></i></a>
      </div>
      <h5>E-mail</h5>
      <p>abhijithkannan452@gmail.com</p>
   </div>
    </div>
  );
}


export default Contact;