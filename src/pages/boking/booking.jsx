import React from 'react';
import Banner from '../../components/banner/Banner';
import Appointment from '../../components/appointment/appointment';
const Booking = _ => {
    return ( 
        <div className="booking">
         <Banner parent={"Home"} child={"Book Appointment"}/>
            <div className="container mt-5 mb-5">
                <Appointment />
            </div>
        </div>
     );
}
 
export default Booking;