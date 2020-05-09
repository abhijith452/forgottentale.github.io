import React from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Positions from './components/Position';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Menu from './menu'
import './components/css/App.css';

function App() {
  return (
    <div className="App">
    <Menu />
    <Content/>
   
    </div>
  );
}

export default App;


function Content() {
  return (
    <div className="Content">
      <Home />
      <Projects/>
      <Positions/>
      <Skills/>
    </div>
  );
}