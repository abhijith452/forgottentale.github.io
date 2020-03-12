import React from 'react';
import './css/achievements.css';
function Achievements(){
return(
<div className="Achievements">
    <center><h3>ACHIEVEMENTS</h3></center>
<div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h3 className="text-primary">Microsoft Student Partner 2019-20</h3>
                            <div className="line"></div>
                            <p>Took the role of Microsoft student partner in june 2019 to 2020</p>
                            <a href="#"><h6>More detail....</h6></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h3 className="text-warning">Bolt Student Partner</h3>
                            <div className="line"></div>
                            <p>Took the role as Bolt IOT student partner intern for 2 months</p>
                            <a href="#"><h6>More detail....</h6></a>
                        </div>
                    </div>
                 </div>
             </div>   

</div>
);
}
export default Achievements;