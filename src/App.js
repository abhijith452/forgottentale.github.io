import React,{useState, useEffect} from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Positions from './components/Position';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Menu from './menu'
import './components/css/App.css';
import About from './components/About';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {


  useEffect(()=>{
    Aos.init({duration:800});
  })
  

  return (
    <div className="App" id="App">
      
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