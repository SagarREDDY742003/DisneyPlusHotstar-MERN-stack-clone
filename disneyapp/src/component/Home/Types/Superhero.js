import React,{useState,useEffect} from 'react';
import './Item.css';
import Itemdisplay from '../Itemdisplay';

const baseUrl = process.env.REACT_APP_API_URL;

function Superhero(){
    const[movieType, setMovieType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/movietype?typeid=11`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMovieType(data)
        })
    },[])
    return(
        <div className='movie-container'>
            <div className="movie-type">
                    <p className="typename">Best Of Super Hero</p>
                    <Itemdisplay itemData={movieType}/>
                </div>
            </div>
    )
}

export default Superhero;