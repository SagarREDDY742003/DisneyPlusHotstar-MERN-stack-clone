import React from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {
    console.log(">>>",props);
    const dataitem = ({descData}) => {
        if(descData){
            if(descData.length > 0){
            return descData.map((item) =>{
                // let aar = item.type;
                // console.log(aar);
                return(
                    <div className="detail">
                        <div className='bigg'>
                            <img src={item.big_img} alt=""/>
                        </div>
                        <div className="detailcont">
                            <div className="detaincontbt">
                                <div className='logoo'>
                                    <img src={item.logo} alt=''/>
                                </div>
                                <div className='but'>
                                    <Link to={`/details/video`} className='lll'>
                                        <button className='btn btn-primary watchbut'>Watch Now</button>
                                    </Link>
                                    <button className='btn btn-warning plusbut'>Add TO WatchList</button>
                                </div>
                            </div>
                                <div className='infor'>
                                    <p>{item.name}</p>
                                    <div className='group'>
                                        <p>{item.year}</p>
                                        <p className='ch'>{item.duration}</p>
                                    </div>
                                    <div className='group'>
                                        <p>{item.nooflang}</p>
                                        <p className='ch'>{item.rated}</p>
                                    </div>
                                    <p>{item.info}</p>
                            </div>
                           
                        </div>
                    </div>
                    
                )
            }
            
            )
        }
       
        }
        else{
            return(     
                <div className='spinner'>
                    <img src="/images/spingif.gif" alt="loader" />
                </div>
            )
        }
    }
    return(
            <div className="tabinner">
                {dataitem(props)}
            </div>
    )

}

export default Details;