import React from 'react';


function Contact() {
  return (
    <div className="Contact">
   <form>
       <input type = "text" placeholder = "Your Name"></input>
       <input type = "email" placeholder = "Your E-mail"></input>
       <input type = "text" placeholder = "Subject"></input>
       <textarea placeholder ="Message"></textarea>
       <button>Sent</button>
   </form>
    </div>
  );
}


export default Contact;