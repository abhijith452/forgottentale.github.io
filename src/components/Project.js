import React from 'react';

const carddata = {
   
        img : "hello",
        title : "Water Pipeline Network Monitioring System",
        description : "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart",

        img : "hello",
        title : "Water Pipeline Network Monitioring System",
        description : "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart",

        img : "hello",
        title : "Water Pipeline Network Monitioring System",
        description : "A realtime water pressure,ph and water flow rate monitoring system. A webapp is used to display the data on a chart",
  
}

function Projects() {
  return (
    <div className="Projects">
        <Card data = {carddata}/>
    </div>
  );
}

function Card(props){
    return(
        <div className = "cardbody">
            {props.data.img}
            <h3>{props.data.title}</h3>
           <p>{props.data.description}</p> 
        </div>
    )
}
export default Projects;