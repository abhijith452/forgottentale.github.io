import React,{useState} from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Positions from './components/Position';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Menu from './menu'
import './components/css/App.css';
import About from './components/About';
import Mobilemenu from './MobileMenu'

function App() {
  const [mobile,setMobile] = useState({
    open : false
  });
  
  function toggle(){
   setMobile((prevState)=>{
     return({open : !prevState.open})
   })
   console.log(mobile.open)
  }
  return (
    <div className="App" id="App">
      <div>
        <button className="hamburger mobile" onClick={toggle}>
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
        
    </button>
    </div>
    <Menu />
    <Mobilemenu  open={mobile.open} callback={toggle}/>
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