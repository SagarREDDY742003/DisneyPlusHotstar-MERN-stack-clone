import React from 'react';
import './Crousel.css'
import { Link } from 'react-router-dom';

const Crouseldisplay = (props) => {
    console.log(">>>",props);
    const Crouselitem = ({crouselData}) => {
        if(crouselData){
            return crouselData.map((crousel) =>{
                return(
                    <div className="carousel-item bb">
                        <img src={crousel.big_img} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption hi">
                            <div className="movie-cont">
                                <img src={crousel.logo} alt=""/>
                                <p className="pp1">{crousel.year} <b>|</b> <b >{crousel.rated}</b></p>
                                <p className="pp2">{crousel.info}</p>
                                <p className="pp3">{crousel.type.categorytype}Action / Drama / Historicaly</p>
                                <div className="butn">
                                    <Link to={`/details/${crousel.id}`} key={crousel.id} className='link'>
                                        <button className="watch">Watch Now</button>
                                    </Link>
                                    {/* <button className="plus">+</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
            <div className="mov">
                {Crouselitem(props)}
            </div>
    )

}

export default Crouseldisplay;
