import React from 'react';
import Projects from './components/projects/projects';
import Menu from './components/menu/menu';
import './App.scss';


function App() {
  return (
    <div className="outer_wrapper">
      <div className="inner_wrapper">
        <Menu />
        <Projects/>
      </div>
    </div>
  );
}

export default App;
