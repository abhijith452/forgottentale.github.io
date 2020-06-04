
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
              percent = "80%"
              />
               <Pbar
              title = "React.js"
              percent = "60%"
              />
               <Pbar
              title = "Azure"
              percent = "40%"
              />
               <Pbar
              title = "C/C++"
              percent = "80%"
              />
               <Pbar
              title = "Python"
              percent = "60%"
              />
              
        </div>
        </div>
    )

}
function Pbar(props)
{
    return(
        <div className="progressbar" data-aos="fade-right">
            <h4>{props.title}</h4>
              <div className="pbouter">
                <div className="pbinner"  style={{width:props.percent}} data-aos="fade-right">
                  
                  </div>
              </div>
        </div>
    )
}
export default Skills;