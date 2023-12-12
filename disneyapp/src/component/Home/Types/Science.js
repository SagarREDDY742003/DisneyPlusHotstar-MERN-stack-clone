import React,{useState,useEffect} from 'react';
import './Item.css';
import Itemdisplay from '../Itemdisplay';

const baseUrl = process.env.REACT_APP_API_URL;

function Science(){
    const[movieType, setMovieType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/movietype?typeid=5`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMovieType(data)
        })
    },[])
    return(
        <div className='movie-container'>
            <div className="movie-type">
                    <p className="typename">Science Fiction</p>
                    <Itemdisplay itemData={movieType}/>
                </div>
            </div>
    )
}

export default Science;