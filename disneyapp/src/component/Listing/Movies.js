import React,{useState,useEffect} from 'react';
import Tabdisplay from './Tabdisplay';
import './Movies.css';
// import axios from 'axios';
// import {useParams} from 'react-router-dom'

const baseUrl = process.env.REACT_APP_API_URL;

function Movies(){
    
    // let params = useParams();
    const[movieType, setMovieType] = useState([]);
    // let id = params.id;

    useEffect(() => {
        // sessionStorage.setItem('id',id);
        fetch(`${baseUrl}/videotype?category_id=2`,{method:'GET'})
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

export default Movies;