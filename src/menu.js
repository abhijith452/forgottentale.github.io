import React from 'react'; 
import {Link} from 'react-scroll'

function Menu() {
  return (
    <div className="Menu">
      <div className="hamburger">
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
        <div className="toggle_div"></div>
      </div>
      <ul>
          <li><Link to="Home" smooth={true} duration={800}><i className="fas fa-home fa-1x" ></i></Link></li>
          <li><Link to="Projects" smooth={true} duration={800}><i className="fas fa-project-diagram fa-1x" ></i></Link></li>
          <li><Link to="Positions" smooth={true} duration={800}><i className="fas fa-tasks fa-1x" ></i></Link></li>
          <li><Link to="Skills" smooth={true} duration={800}><i className="fas fa-cog fa-1x" ></i></Link></li>
          <li><Link to="About" smooth={true} duration={800}><i className = "fas fa-user fa-1x" ></i></Link></li>
          <li><Link to="Contact" smooth={true} duration={800}><i className="fas fa-envelope fa-1x" ></i></Link></li>
          
      </ul>
      <div className="spacer"></div>

    </div>
  );
}

export default Menu;
