import React from 'react';
import './scss/home.scss';
import logo from './assets/logo.png';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home__intro">
        <h1 className="home__intro__text">Hi,<br />
                I'm <span>Abhijith</span>,<br />
                web developer</h1>
        <p className="home__intro__para">Front-End Web Developer | IOT developer</p>
        <Link to="Projects" smooth={true} duration={800}>  <button className="button">See Projects</button></Link>
      </div>
      <img src={logo} alt="logo"></img>

    </div>
  );
}

export default Home;