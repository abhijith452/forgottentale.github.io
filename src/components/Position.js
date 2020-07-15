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
     des = "As a MSP, i have hosted a small workshop on th topic 'Fundamentals of Azure ' at my college, hosted a webinar on the topic 'Getting started with Azure IoT' and have co organized two other webinars as well "
   />
   <Card 
     img = {bolt}
     title = "Bolt Student Ambassasor"
     des = "The internship responsibilities includes promotion of Internet of Things and Machine Learning online training and organise a webinar on the topic 'IoT and ML meet-up' at my college" />
 

  
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