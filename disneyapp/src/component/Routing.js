import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home'
import Footer from './Footer';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import Movies from './Listing/Movies';
import Tv from './Listing/Tv';
import Sports from './Listing/Sports';
import Videoplay from './Videoplay/Video';
import DetailsLogic from './EachTabDetails/DetailsLogic';
import Login from './Profile/loginComponent';
import Register from './Profile/registerComponent';

const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/* <Route path="/Profile" element={<Main/>}>
                        <Route index element={<Profile/>}/>
                    </Route> */}
                    <Route path="/" element={<Main/>}>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Search" element={<Search/>}/>
                        <Route path="/Movies" element={<Movies/>}/>
                        <Route path="/Tv" element={<Tv/>}/>
                        <Route path="/Sports" element={<Sports/>}/>
                        <Route path="/details/:id" element={<DetailsLogic/>}/>
                        <Route path="/details/video" element={<Videoplay/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>
                    {/* <Route path="/Search" element={<Main/>}>
                        <Route index element={<Search/>}/>
                    </Route>
                    <Route path="/Movies" element={<Main/>}>
                        <Route index element={<Movies/>}/>
                    </Route>
                    <Route path="/Tv" element={<Main/>}>
                        <Route index element={<Tv/>}/>
                    </Route>
                    <Route path="/Sports" element={<Main/>}>
                        <Route index element={<Sports/>}/>
                    </Route>
                    <Route path="/details/:id" element={<Main/>}>
                        <Route index element={<DetailsLogic/>}/>
                    </Route> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;