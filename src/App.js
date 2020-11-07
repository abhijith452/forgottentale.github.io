import React from 'react';
import Projects from './components/projects/projects';
import Menu from './components/menu/menu';
import Positions from './components/positions/positions';
import './App.scss';


function App() {
  return (
    <div className="outer_wrapper">
      <div className="inner_wrapper">
        <Menu />
        <Projects/>
        <Positions/>
      </div>
    </div>
  );
}

export default App;
