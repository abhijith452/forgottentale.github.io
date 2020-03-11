import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Projects from './components/Projects';

class App extends React.Component
 {
  render ()
   {
     return(
       <div className="outerwrapper">
         <div className="wrapper2">
             <Intro/>
             <Projects/>          
           </div>
         </div>
     )  
  }
  
}
export default App;


  
 
  
 

