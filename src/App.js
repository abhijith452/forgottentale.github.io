import React from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Positions from './components/Position';
import Blog from './components/Blog';
import Contact from './components/Contact'
import './components/css/App.css';

function App() {
  return (
    <div className="App">
      
     <Home/>
     <Projects/>
    <Positions/>
     <Blog/>
     <Contact/>
    </div>
  );
}

export default App;
