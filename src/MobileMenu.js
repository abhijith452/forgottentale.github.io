import React,{useEffect,useState} from 'react'; 
import {Link} from 'react-scroll';

function MenuMoblie(props) {



var display = {display:"none",width:"100%"};
var home,skills,projects,pos,about,contact;

console.log(props.open)
  if(props.open===true)
  {
    display = {display:"flex",width:"100%"}
    home = <p>Home</p>
    skills = <p>Skills</p>
    projects = <p>Projects</p>
    pos = <p>Positions</p>
    about = <p>About</p>
    contact = <p>Contact Me</p>

  }
  return (
    <div className="Menu Menu_mobile"style={display}>

      <ul>
  <li><Link to="Home" smooth={true} duration={800}  onClick={props.callback}><i className="fas fa-home fa-1x"></i>{home}</Link></li>
  <li><Link to="Projects" smooth={true} duration={800}  onClick={props.callback}><i className="fas fa-project-diagram fa-1x" ></i>{projects}</Link></li>
  <li><Link to="Positions" smooth={true} duration={800}  onClick={props.callback}><i className="fas fa-tasks fa-1x" ></i>{pos}</Link></li>
          <li><Link to="Skills" smooth={true} duration={800}  onClick={props.callback}><i className="fas fa-cog fa-1x" ></i>{skills}</Link></li>
  <li><Link to="About" smooth={true} duration={800}  onClick={props.callback}><i className = "fas fa-user fa-1x" ></i>{about}</Link></li>
          <li><Link to="Contact" smooth={true} duration={800}  onClick={props.callback}><i className="fas fa-envelope fa-1x" ></i>{contact}</Link></li>
          
      </ul>
      <div className="spacer"></div>

    </div>
  );
}

export default MenuMoblie;
