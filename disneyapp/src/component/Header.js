import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){

    function closeCoupon(){
        if(
            document.getElementById('coupon')
            ) {
                document.getElementById('coupon').style.visibility = 'hidden';
            }
    };
    window.onload = onloadPage();
    function onloadPage(){
       if(
       document.getElementById("coupon","sub")
       ) {
           document.getElementById('coupon').style.visibility = 'visible';
           document.getElementById('sub').style.visibility = 'hidden';
       }
   };



   function opensubscriptionpack(){
    if(
        document.getElementById('sub')
        ) {
            document.getElementById('sub').style.visibility = 'visible';
        }
    };
    function closeSub(){
        if(
            document.getElementById('sub')
            ) {
                document.getElementById('sub').style.visibility = 'hidden';
            }
    };


  
    return(
        <div className='body'>
        <div className="navba">
            <div className="logo">
                <img src="https://i.ibb.co/SnnS4R9/logo.jpg" alt="" />
                <button onClick={opensubscriptionpack}>Subscribe</button>
            </div>
            <div className="option">
                <Link to={`/Profile`}><i className="fa-solid fa-user contact"></i></Link>        
                 <Link to={`/`}><i className="fa-solid fa-house home"></i></Link>      
                <Link to={'/Search'}> <i className="fa-solid fa-magnifying-glass search"></i></Link>
                <Link to={`/Movies`}><i className="fa-solid fa-tv tv"></i></Link>
                <Link to={`/TV`}><i className="fa-solid fa-video video"></i></Link>
                <Link to={`./Sports`}><i className="fa-solid fa-hockey-puck sports"></i></Link>
                {/* <i class="fa-solid fa-moon" onClick={changeMode}></i> */}
            </div>
        </div>
            <div id="coupon">
                <button onClick={closeCoupon}>&times;</button>
            </div>
            <div id='sub'>
                <button onClick={closeSub}>&times;</button>
            </div>
        </div>
    )
}
export default Header;