import React from 'react';
import './css/home.css'
import logo from './assets/logo.png'

function Home() {
  return (
    <div className="Home" id ="Home">
        <div className="jumbotron">
              <h1>Hi,<br />
                I'm <span>Abhijith</span>,<br />
                web developer</h1>
             <p>Front-End Web Developer | IOT developer</p>
             <button>See Projects</button>
           </div>
             <img src={logo}></img>

    </div>
  );
}

export default Home;