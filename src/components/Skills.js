
import React from 'react'
import './scss/skills.scss'
function Skills(){
    return(<div className="skills component" id="Skills">
       <center><h3 className ="skills__title">MY <span>SKILLS</span></h3></center> 
        <div className="skills__grid">
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
            <h4 className = "progressbar__title">{props.title}</h4>
              <div className="progressbar__outer">
                <div className="progressbar__inner"  style={{width:props.percent}} data-aos="fade-right">
                  
                  </div>
              </div>
        </div>
    )
}
export default Skills;