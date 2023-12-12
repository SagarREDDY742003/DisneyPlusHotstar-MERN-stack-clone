
 import React,{useState,useEffect} from 'react';
 import './Crousel.css';
 import Crouseldisplay from './Crouseldisplay';
 
 const baseUrl = process.env.REACT_APP_API_URL;
 
 function Crousel(){
     const[crouselMovie, setCrouselmovie] = useState([]);
 
     useEffect(() => {
         fetch(`${baseUrl}/crouseldetails`,{method:'GET'})
         .then((res) => res.json())
         .then((data) => {
             setCrouselmovie(data)
         })
     },[])


    
    return(
        <div id="carouselExampleInterval" className="carousel slide crsl"  data-bs-ride="carousel" >
            <div className="carousel-inner">
            <div class="carousel-item active bb">
                <img src="./images/imgmain.webp" class="d-block w-100" alt="..."/>
                <div className="carousel-caption hi">
                            <div className="movie-cont">
                                <img src='./images/imgmaintitle.webp' alt=""/>
                                <p className="pp1">2023<b>|</b> <b >16+</b></p>
                                <p className="pp2">ALL EPISODES OUT. A city in danger! A committed cop takes on a "dead" gangster and his syndicate to stop a massive economic crime.</p>
                                <p className="pp3">Action / Drama / Crime</p>
                                <div className="butn">
                                     <button className="watch">Watch Now</button>
                                    {/* <button className="plus">+</button> */}
                                </div>
                            </div>
                        </div>
            </div>
                <Crouseldisplay crouselData={crouselMovie}/>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon  gpsl" aria-hidden="true"></span>
                <span className="visually-hidden gps">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon gpsr" aria-hidden="true"></span>
                <span className="visually-hidden hht">Next</span>
            </button>
        </div>   
         
    )
  
 }
 
 export default Crousel;