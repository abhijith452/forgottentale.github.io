import React from 'react';
import './css/intro.css';
import pic from './images/photo.webp'
function Intro(){
    return(
        <div className="intro">
            <img src={pic}/>
            <h3 className="name">Abhijith Kannan</h3>
            <ul>
                <li>IOT DEVELOPER</li>
                <li>WEB DEVELOPER</li>
            </ul>
            <p>An undergraduate electrical and electronic engineering student, Microsoft Student Partner 2019-20 whose in the quest to find or make something new thats creative and extraordinary. Being a tech nerd myself, i always love computer technology ,science and infinity. I also make music, love to do vfx and much more.</p>
            </div>
    )
}
export default Intro;