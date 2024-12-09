import React from 'react';
import '../../components/error/error.css';
import Banner from './../banner/Banner';
import { useNavigate } from 'react-router-dom';
const Error = _ => {
    const navigate = useNavigate();
    const handleBack = () => {
        window.scroll({
            behavior: "smooth",
            top: 0
        })
        navigate('/doctor');
    }
    return ( <>
    <div className="error">
        <Banner parent={"Home"} child={'Page Not Found'}/>
        <div className="container">
            <div className="inner-tx">
                <h2>
                    4
                    <span></span>
                    4
                </h2>
                <h5>The Page you were looking for, couldn't be found.</h5>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <button onClick={handleBack}>Back To Home</button>
            </div>
        </div>
    </div>
    </>);
}
 
export default Error;