import React from 'react';
import './css/home.scss';
import logo from './assets/logo.png';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="jumbotron">
        <h1>Hi,<br />
                I'm <span>Abhijith</span>,<br />
                web developer</h1>
        <p>Front-End Web Developer | IOT developer</p>
        <Link to="Projects" smooth={true} duration={800}>  <button className="button">See Projects</button></Link>
      </div>
      <img src={logo}></img>

    </div>
  );
}

export default Home;