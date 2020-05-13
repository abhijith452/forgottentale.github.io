import React from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Positions from './components/Position';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Menu from './menu'
import './components/css/App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <button className="hamburger mobile">
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
    </button>
    <Menu />
    <Content/>
   
    </div>
  );
}

export default App;


function Content() {
  return (
    <div className="Content">
      <div className="wrapper">
      <Home />
      <Projects/>
      <Positions/>
      <Skills/>
      <About/>
      <Contact/>
      </div>
    </div>
  );
}