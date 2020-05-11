
import React from 'react'
import './css/skills.css'
function Skills(){
    return(<div className="Skills component" id="Skills">
       <center><h3 className ="title">MY <span>SKILLS</span></h3></center> 
        <div className="PB">
              <Pbar
              title = "Arduino"
              percent = "70%"
              />
               <Pbar
              title = "JavaScipt"
              percent = "70%"
              />
               <Pbar
              title = "React.js"
              percent = "70%"
              />
               <Pbar
              title = "Azure"
              percent = "70%"
              />
               <Pbar
              title = "C/C++"
              percent = "70%"
              />
               <Pbar
              title = "Python"
              percent = "70%"
              />
              
        </div>
        </div>
    )

}
function Pbar(props)
{
    return(
        <div className="progressbar">
            <h4>{props.title}</h4>
              <div className="pbouter">
                <div className="pbinner"  style={{width:props.percent}}>
                  
                  </div>
              </div>
        </div>
    )
}
export default Skills;