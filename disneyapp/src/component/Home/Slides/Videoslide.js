import React from 'react';
import "./Popular.css"

function Videoslide(){
    return(
        <div class="movie-tp">
        <div class="video-type">
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/marvel.mp4" type="video/ogg"/>
                </video>   
            </div>
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/disney.mp4" type="video/ogg"/>
                </video>   
            </div>
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/starwars.mp4" type="video/ogg"/>
                </video>   
            </div>
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/ngc.mp4" type="video/ogg"/>
                </video>   
            </div>
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/pixar.mp4" type="video/ogg"/>
                </video>   
            </div>
            <div class="type">
                <video onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;">
                    <source src="./videos/hotstar.mp4" type="video/ogg"/>
                </video>   
            </div>
        </div>
    </div>
    )
}

export default Videoslide;