import React from 'react';
import "./Footer.css"

function Footer(){
    return(
        <div className='footer'>
            <div className='foot'>
                <div className='foot-details'>
                    <h3 className='hed'>Company</h3>
                    <p className='conte'>About Us</p>
                    <p className='conte'>Careers</p>
                </div>
                <div className='foot-details'>
                    <h3 className='hed'>View Website in</h3>
                    <p className='conte'>English</p>
                    <p className='conte'>Telugu</p>
                    {/* <p className='conte'>Hindi</p> */}
                </div>
                <div className='foot-details'>
                    <h3 className='hed'>Company</h3>
                    <p className='conte'>About Us</p>
                    <p className='conte'>Careers</p>
                </div>
                <div className='foot-details'>
                    <h3 className='hed'>Connect with us</h3>
                    <p className='conte'>About Us</p>
                    <p className='conte'>Careers</p>
                </div>
            </div>
            <p className='ccp'>&copy; 2023 STAR. All Rights Reserved</p>
            <p className='ccp'>Terms Of Use  Privacy Polocy  FAQ </p>
        </div>
    )
}

export default Footer;