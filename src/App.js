import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import News from './components/News';
import Contact from './components/Contact';

class App extends React.Component
 {
  render ()
   {
     return(
       <div className="outerwrapper">
         <div className="wrapper2">
             <Intro className ="component"/>
             <Projects className ="component"/>          
             <Achievements className ="component"/>
             <News className ="component"/>
             <Contact className ="component"/>
           </div>
         </div>
     )  
  }
  
}
export default App;


  
 
  
 

