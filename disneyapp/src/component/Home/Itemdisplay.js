import React from 'react';
import { Link } from 'react-router-dom';

const Itemdisplay = (props) => {
    console.log(">>>",props);
    const listitem = ({itemData}) => {
        if(itemData){
            return itemData.map((item) =>{
                return(
                    <Link to={`/details/${item.id}`} key={item.id}>
                    <div className="movie-tab">
                        <img src={item.img} alt=""/>
                        <div className="mov-cont">
                            <div className="btn-2">
                                <Link to={`/details/${item.id}`} key={item.id}>
                                    <button className="watch-2">Watch Now</button>
                                </Link>
                                <button className="plus-2">+</button>
                            </div>
                            <p className="mov-rating">{item.year}  --    {item.rated}   --  {item.nooflang}</p>
                            <p className="mov-desc">{item.info}</p>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return(
            <div className="movie">
                {listitem(props)}
            </div>
    )

}

export default Itemdisplay;