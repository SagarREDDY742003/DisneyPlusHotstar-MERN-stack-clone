import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

export default function Search() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`${baseUrl}/data`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div className='searchpage'>
            <input placeholder='Search...' onChange={(e) => searchItems(e.target.value)} />
            <div className='search-res'>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Link to={`/details/${item.id}`} key={item.id}>
                                <div className='movimg'>
                                    <img src={item.img} alt=''/>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Link to={`/details/${item.id}`} key={item.id}>
                                <div className='movimg'>
                                    <img src={item.img} alt=''/>
                                </div>
                            </Link>
                            
                        )
                    })
                )
                }
            </div>
        </div>
    )
}