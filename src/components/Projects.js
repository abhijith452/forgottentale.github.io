import React from 'react';
import './css/projects.css'

function Projects(){
    return(
        <div className="projects">
            <center><h3>PROJECTS</h3></center>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="border  border-primary">
                            <h3 className="text-primary">Water Distribution Network Monitoring</h3>
                            <div className="line"></div>
                            <p>Our solution for Reboot hackathon 2020</p>
                            <a href="#"><h6>More detail....</h6></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border  border-success">
                            <h3 className="text-success">Tesla Coil</h3>
                            <div className="line"></div>
                            <p>A DIY tesla coil capable of giving a output of 3000v</p>
                            <a href="#"><h6>More detail....</h6></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="border  border-warning">
                            <h3 className="text-warning">Bluetooth Controlled Car</h3>
                            <div className="line"></div>
                            <p>A bluetooth controlled car made using arduino and its different sensors</p>
                            <a href="#"><h6>More detail....</h6></a>
                        </div>
                    </div>
                  
                </div>
            </div>
            
            </div>
    )
}
export default Projects;