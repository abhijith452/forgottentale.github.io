import React from 'react';
import msp from './assets/Msp.svg';
import bolt from './assets/bolt.svg';
import './scss/position.scss'

function Position() {
  return (
 <div className= "positions" id="Positions">
   <center><h2 className = "positions__title">MY <span>POSITIONS</span></h2></center>
  
   <Card 
     img = {msp}
     date ="Aug 2019 - Aug 2020"
     title = "Microsoft Student Partner"
     link = "https://drive.google.com/file/d/1PRkByzFe3Q3OpCmpD3KbvRd3tsDL3P9H/view?usp=sharing"
     des = "As a MSP, i have hosted a small workshop on th topic Fundamentals of Azure  at my college, hosted a webinar on the topic Getting started with Azure IoT and have co organized two other webinars as well "
   />
   <Card 
   date ="Dec 2019 - Feb 2020"
     img = {bolt}
     title = "Bolt Student Ambassasor"
     link = "https://drive.google.com/file/d/1Ptc4vWtntxHgXNpK4hofnwZfCOnZk5sV/view?usp=sharing"
     des = "The internship responsibilities includes promotion of Internet of Things and Machine Learning online training and organise a webinar on the topic IoT and ML meet-up at my college" />
 

  
   </div>
  );
}

function Card(props){
    return(
        <div className = "card2">
           <img alt = "card" src={props.img} className ="card2__img"></img>
            
           <div className ="card2__text">
           <h3  className ="card2__text__title">{props.title}</h3>
           <p  className ="card2__text__date">{props.date}</p>
           <p className ="card2__text__des">{props.des}</p>
           <a  className ="card2__text__link" href={props.link}>More Details</a>
           </div>
         
        </div>
    )
}
export default Position;