import React from 'react';
import msp from './assets/Msp.svg';
import bolt from './assets/bolt.jpg';
import './scss/position.scss'

function Position() {
  return (
 <div className= "positions" id="Positions">
   <center><h2 className = "positions__title">MY <span>POSITIONS</span></h2></center>
  
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
  );
}

function Card(props){
    return(
        <div className = "card2">
           <img alt = "card" src={props.img} className ="card2__img"></img>
           <div className ="card2__text">
           <h3  className ="card2__text__title">{props.title}</h3>
           <p className ="card2__text__des">{props.des}</p>
           </div>
         
        </div>
    )
}
export default Position;