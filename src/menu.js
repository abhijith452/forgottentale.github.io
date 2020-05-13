import React,{useEffect,useState} from 'react'; 
import {Link} from 'react-scroll';

function Menu() {
  const [open,setOpen] = useState({
    open : false
  });

 function toggle(){
   setOpen((prevState)=>{
     return({open : !prevState.open})
   })
   console.log(open.open)
 }
var width = {width:"auto"};
var home,skills,projects,pos,about,contact;


  if(open.open===true)
  {
    width = {width:"200px"}
    home = <p>Home</p>
    skills = <p>Skills</p>
    projects = <p>Projects</p>
    pos = <p>Positions</p>
    about = <p>About</p>
    contact = <p>Contact Me</p>

  }
  return (
    <div className="Menu" onClick={toggle} style={width}>
      <button className="hamburger">
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
      </button>
      <ul>
  <li><Link to="Home" smooth={true} duration={800}><i className="fas fa-home fa-1x" ></i>{home}</Link></li>
  <li><Link to="Projects" smooth={true} duration={800}><i className="fas fa-project-diagram fa-1x" ></i>{projects}</Link></li>
  <li><Link to="Positions" smooth={true} duration={800}><i className="fas fa-tasks fa-1x" ></i>{pos}</Link></li>
          <li><Link to="Skills" smooth={true} duration={800}><i className="fas fa-cog fa-1x" ></i>{skills}</Link></li>
  <li><Link to="About" smooth={true} duration={800}><i className = "fas fa-user fa-1x" ></i>{about}</Link></li>
          <li><Link to="Contact" smooth={true} duration={800}><i className="fas fa-envelope fa-1x" ></i>{contact}</Link></li>
          
      </ul>
      <div className="spacer"></div>

    </div>
  );
}

export default Menu;
