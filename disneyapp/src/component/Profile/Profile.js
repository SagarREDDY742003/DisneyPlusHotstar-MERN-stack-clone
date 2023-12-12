import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Profile.css";
import { Link } from 'react-router-dom';

const url = process.env.REACT_APP_LOGIN_API_URL

function Profile(){

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();
    
    useEffect(() => {
        if(sessionStorage.getItem('ltk') != null){
            fetch(`${url}/userinfo`,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }

    const conditionalProfile = () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return(
                    <div className='usercontent'>
                        {/* <p className='nmlog'>hi <span>{userData.name}</span></p> */}
                        <div className='udetails'>
                            <p><span>Name:</span>    {userData.name} </p>
                            <p><span>Email:</span>   {userData.email}</p>
                            <p><span>Phone:</span>    {userData.phone}</p>
                            <button onClick={handleLogout} className='btn'>Logout</button>
                        </div>
                    </div>
                )
            }
        }else{
            return(
                <div className='buton'>
                   <Link to="/register" className='link'>
                    <button className='btn btn-primary'>SignUp</button>
                   </Link>
                   <Link to="/login" className='link'>
                    <button className='btn btn-warning'>Login</button>
                   </Link>
                </div>
            )
        }
    }
    return(
        <div className='profile'>
            <div className='content'>
                  <div className='pic'></div>
            </div>
            <div className='controle'>{conditionalProfile()}</div>
        </div>
    )
}

export default Profile;
