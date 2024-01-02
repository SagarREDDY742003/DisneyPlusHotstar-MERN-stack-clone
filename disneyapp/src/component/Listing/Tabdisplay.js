import React from 'react';
import { Link } from 'react-router-dom';

const Tabdisplay = (props) => {
    console.log(">>>",props);
    const listitem = ({itData}) => {
        if(itData){
            if(itData.length > 0){
            return itData.map((item) =>{
                return(
                    <Link to={`/details/${item.id}`} key={item.id}>
                    <div className="movietab">
                        <img src={item.img} alt=""/>
                        <div className="moviecontent">
                            <div className="btn-2">
                                <Link to={`/details/${item.id}`} key={item.id}>
                                    <button className="watch-2">Watch Now</button>
                                </Link>
                                <button className="plus-2">+</button>
                            </div>
                            <p className="movierating">{item.year}  --    {item.rated}   --  {item.nooflang}</p>
                            <p className="moviedesc">{item.info}</p>
                        </div>
                    </div>
                    </Link>
                )
            })
        }else{
            return(     
                <div className='spinner'>
                    <img src="/images/spingif.gif" alt="loader" />
                </div>
            )
        }
        }else{
            return(
                <h2>NO DATA FOUND</h2>
            )
        }
    }
    return(
            <div className="tabinner">
                {listitem(props)}
            </div>
    )

}

export default Tabdisplay;