import React from 'react';

import './positions.scss';

function Positions(){
    return(
        <div className="positions">
           <div className="positions_position">
           <span>01</span>
               <h5 className="positions_position_title">
                 
                MICROSOFT LEARN STUDENT PARTNER
               </h5>
               <p className="positions_position_time">
                2019-2021
               </p>
           </div>
           <div className="positions_position">
           <span>02</span>
               <h5 className="positions_position_title">
               IEEE STUDENT VOLUNTEER
               </h5>
               <p className="positions_position_time">
               2019-2020
               </p>
           </div>
           <div className="positions_position"> 
            <span>03</span>               
            <h5 className="positions_position_title">
            BOLT STUDENT AMBASSADOR
               </h5>
               <p className="positions_position_time">
               2019-2020
               </p>
           </div>
            
        </div>
    )
}

export default Positions;