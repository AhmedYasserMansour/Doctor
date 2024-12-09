import React from 'react';
import { Link } from 'react-router-dom';
import '../footer/footer.css'
import base from '../../assets/base2.png'
import logo from '../../assets/logo.png'
import circle from '../../assets/circle.png'
import face from '../../assets/face.png'
import twitter from '../../assets/twitter.png';
import insta from '../../assets/insta.png';
import linked from '../../assets/linked.png';
import phone from '../../assets/phone-orange.jpg'

const Footer = () => {
    
    return ( 
        <div className="container footer">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <img className='base-b bace-left' src={base} alt="" />
                    <div><img src={logo} alt="" /></div>
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                     dolore smod tempor incididunt ut labore et.</p>
                     <div className="contact-us">
                        <div className="phone">
                       <img src={phone} alt="" />
                        <img className='circle-2'  src={circle} alt="" />
                        <div className='ms-2'>
                            <span>Contact Us</span>
                            <h4>+01006352442</h4>
                        </div>
                        </div>
                     </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <h3>Quick Links</h3>
                    <p>About Us Services Booking Faq's Blogs Out Team</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <h3>Our Service</h3>
                    <p>Dental Care Cardiac Clinic Massege Therapy Cardiology Precise Diagnosis Abmbulance Services</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <h3>Subcribe</h3>
                   <form>
                   <input className='email' type="email" placeholder='Email Address' required />
                   <button type='submit'>Subscribe Now</button>
                   </form>
                    <ul>
                        <li><Link to="https://www.facebook.com/"><img src={face} alt="" /></Link></li>
                        <li><Link to="https://x.com/"><img src={twitter} alt="" /></Link></li>
                        <li><Link to="https://www.instagram.com/"><img src={insta} alt="" /></Link></li>
                        <li><Link to="https://www.linkedin.com/feed/"><img src={linked} alt="" /></Link></li>
                    </ul>
                    <img className='base-b bace-right' src={base} alt="base" />
                </div>
            </div>
            <hr />
            <h5>Copyright © 2024 Design & Developed by <span>AHMED YASSER</span></h5>
        </div>
     );
}
 
export default Footer;