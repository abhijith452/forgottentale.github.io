import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Intro from './components/Introduction'
import Contact from './components/Contact';
import Projects from './components/Projects'
import Achievements from './components/Achievements';




function App() {
  return (
    <div className="outerwrapper">
      <div className="wrapper2">
     <Intro content={{ 
     name : "Abhijith Kannan",
     text : "An undergraduate electrical and electronic engineering student, Microsoft Student Partner 2019-20 whose in the quest to find or make something new thats creative and extraordinary. Being a tech nerd myself, i always love computer technology ,science and infinity. I also make music, love to do vfx and much more."
    
    }} />
      <Achievements />
      <Projects  />
      <Contact  />
      </div>
      

</div>
  
  );
}

export default App;
