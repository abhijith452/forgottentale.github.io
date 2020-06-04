import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './components/css/menu.scss';

function Menu() {
  const [open, setOpen] = useState({
    open: false
  });

  function toggle() {
    setOpen((prevState) => {
      return ({ open: !prevState.open })
    })
    console.log(open.open)
  }
  var width = { width: "auto" };
  var home, skills, projects, pos, about, contact;

  if (open.open === true) {
    width = { width: "200px" }
    home = <p>Home</p>
    skills = <p>Skills</p>
    projects = <p>Projects</p>
    pos = <p>Positions</p>
    about = <p>About</p>
    contact = <p>Contact Me</p>

  }
  return (
    <div className="menu" id="menu">


      <div className="menu_list">
        <Link to="Home" smooth={true} duration={800}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <p className="menu_text">Home</p>
        </Link>
      </div>

      <div className="menu_list">
        <Link to="Projects" smooth={true} duration={800}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          <p className="menu_text">Projects</p>
        </Link>
      </div>
      <div className="menu_list">
        <Link to="Positions" smooth={true} duration={800}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          <p className="menu_text">Positions</p>
        </Link>
      </div>

      <div className="menu_list">
        <Link to="Skills" smooth={true} duration={800}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          <p className="menu_text">Skills</p>
        </Link>
      </div>
      <div className="menu_list">
        <Link to="About" smooth={true} duration={800}>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <p className="menu_text">About Me</p>
        </Link>
      </div>
      <div className="menu_list">
        <Link to="Contact" smooth={true} duration={800}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <p className="menu_text">Contact</p>
        </Link>
      </div>


    </div>
  );
}

export default Menu;
