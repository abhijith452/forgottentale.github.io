import React from 'react';
import msp from './assets/Msp.svg';
import bolt from './assets/Bolt Logo.svg';
import './css/position.css'

function Position() {
  return (
 <div className= "Positions" id="Positions">
   <center><h2 className = "title">MY <span>POSITIONS</span></h2></center>
   <div className="cards">
   <Card 
     img = {msp}
     title = "Microsoft Student Partner"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
   <Card 
     img = {bolt}
     title = "Bolt Student Ambassasor"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
 

   </div>
   </div>
  );
}

function Card(props){
    return(
        <div className = "vcardbody">
           <img src={props.img}></img>
           <div>
           <h3>{props.title}</h3>
           <p>{props.des}</p>
           </div>
         
        </div>
    )
}
export default Position;