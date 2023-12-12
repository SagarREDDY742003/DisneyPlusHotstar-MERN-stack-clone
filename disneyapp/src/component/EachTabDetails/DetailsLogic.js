import React,{useState,useEffect} from 'react';
import Details from './Details';
import './Details.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

function DetailsLogic(){
    let params = useParams();
    const[dataDesc, setdataDesc ] = useState();
    console.log(params.id);
    let id = params.id;
    
    useEffect(() => {
        axios.get(`${baseUrl}/details/${id}`)
        .then((res) => {
            setdataDesc(res.data)
        })
    },[id]);
    
    return(
        <div className='main'>
                <Details descData={dataDesc}/>
        </div>
    )

    
}

export default DetailsLogic;