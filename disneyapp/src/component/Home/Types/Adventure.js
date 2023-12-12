import React,{useState,useEffect} from 'react';
import './Item.css';
import Itemdisplay from '../Itemdisplay';

const baseUrl = process.env.REACT_APP_API_URL;

function Adventure(){
    const[movieType, setMovieType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/movietype?typeid=7`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMovieType(data)
        })
    },[])
    return(
        <div className='movie-container'>
            <div className="movie-type">
                    <p className="typename">Popular in Adventure</p>
                    <Itemdisplay itemData={movieType}/>
                </div>
            </div>
    )
}

export default Adventure;