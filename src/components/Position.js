import React from 'react';

import pic1 from './assets/dv.png';
import pic2 from './assets/teslacoil.png';
import pic3 from './assets/car.png';

function Position() {
  return (
 <div className= "Projects">
   <center><h2 className = "title">MY <span>POSITIONS</span></h2></center>
   <div className="cards">
   <Card 
     img = {pic1}
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
   <Card 
     img = {pic2}
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />
   <Card 
     img = {pic3}
     title = "Water Pipeline Monitoring System"
     des = "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart"
   />

   </div>
   </div>
  );
}

function Card(props){
    return(
        <div className = "cardbody">
          <img src={props.img}/>
           <h3>{props.title}</h3>
           <p>{props.des}</p>
        </div>
    )
}
export default Position;