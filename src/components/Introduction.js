import React from 'react';


function Intro(props) {
    return (
       
       <div className="Intro">
           <img src={require("../assets/photo.png")}/>
    <h1>{props.content.name}</h1>
    <p>{props.content.text}</p>
    </div>
    
)
}
export default Intro;