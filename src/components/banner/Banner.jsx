import React from 'react';
import '../banner/Banner.css';
import { Link, useNavigate } from 'react-router-dom';
import Circleblue from '../../assets/circle.png';
import Plusblue from '../../assets/plus-b.png';

const Banner = ({parent, child}) => {
    const navigate = useNavigate();
    return ( 
    <div className="banner">
            <div className="container">
            <h2>{child}</h2>
            <ul className='transition'>
                <li>
                <Link onClick={()=> navigate("/doctor")}>
                <i className="fa-solid fa-house"></i>
                <span>{parent}</span>
                </Link>
                </li>
                <li>
                    <span className="slash">/</span> 
                    <span>{child}</span>
                </li>
            </ul>
        <img src={Circleblue} alt="circle" />
        <img src={Plusblue} alt="plus" />
        </div>
    </div>
     );
}
 
export default Banner;