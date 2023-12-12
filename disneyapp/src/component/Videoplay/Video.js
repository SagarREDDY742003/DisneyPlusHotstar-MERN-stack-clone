import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
// import 'react-html5video/dist/styles.css';
// import introVideo from

function Videoplay(){
    return(
        <div className='vsd'>
             <Video autoPlay loop className='dfs'>
                <source src='/videos/sagar.webm' className='hhf'/>
            </Video>
        </div>
    );
};

export default Videoplay;