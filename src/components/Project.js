import React from 'react';
import './css/projects.css';

function Projects() {
  return (
 <div className= "Projects" id ="Projects">
   <center><h2 className = "title">MY <span>PROJECTS</span></h2></center>
   <div className="timeline">
   <Card 
     date ="Feb 2020"
     cat = "IOT / DATA VISUALISATION"
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
      <Card 
     date ="Feb 2020"
     cat = "IOT / DATA VISUALISATION"
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
      <Card 
     date ="Feb 2020"
     cat = "IOT / DATA VISUALISATION"
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
  
   </div>
   </div>
  );
}

function Card(props){
    return(
        <div className = "cardbody" data-aos="fade-left">
           <p>{props.date}</p>
           <h4>{props.cat}</h4>
           <h3>{props.title}</h3>
           <p>{props.des}</p>
        </div>
    )
}
export default Projects;