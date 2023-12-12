import React,{useState,useEffect} from 'react';
import Tabdisplay from './Tabdisplay';
import './Movies.css';

const baseUrl = process.env.REACT_APP_API_URL;
function Sports(){
    const[movieType, setMovieType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/videotype?category_id=3`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMovieType(data)
        })
    },[])
    return(
        <div className='tabouter'>
                <Tabdisplay itData={movieType}/>
        </div>
    )
}

export default Sports;