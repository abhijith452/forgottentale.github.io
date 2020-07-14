import React from 'react';
import './css/projects.scss';

function Projects() {
  return (
 <div className= "projects" id ="Projects">
  <center><h2 className = "projects__title">MY <span> PROJECTS</span></h2></center> 
   <div className="projects__timeline">
   <Card 
     date ="Feb 2020"
     cat = "IOT / DATA VISUALISATION"
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
     link="https://github.com/ForgottenTale/Water-Pipeline-Distribution-Network-Monitoring-System"
   />
      <Card 
     date ="April 2019"
     cat = "ELECTRICAL"
     title = "Tesla Coil"
     des = "An tesla coil capable of delivering thousands of volts made using copper wires,flyback transformer and diy capacitor"
   />
      <Card 
     date ="Nov 2019"
     cat = "ARDUINO PROGRAMMING"
     title = "Bluetooth Controlled Car"
     des = "A car that can be controlled using app in an ardroid phone with the help of bluetooth"
   />
  
   </div>
   </div>
  );
}

function Card(props){
    return(
        <div className = "card" >
           <p className = "card__date" >{props.date}</p>
           <h4 className = "card__catogory" >{props.cat}</h4>
           <h3 className = "card__title" >{props.title}</h3>
           <p className = "card__des" >{props.des}</p>
           <a href={props.link} className = "card__link" >More Details</a>
        </div>
    )
}
export default Projects;