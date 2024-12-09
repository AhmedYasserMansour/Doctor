import React from 'react';
import '../../Services/service/service.css';
import Banner from '../../components/banner/Banner';
import Slide from '../../components/slide/slide';
import { Link } from 'react-router-dom';
import Doctor5 from '../../assets/doc-5.jpg';
import Doctor8 from '../../assets/doc-8.jpg';
import Doctor6 from '../../assets/doc-6.jpg';
import LatestNews from './../../components/latestnews/latestnews';

const Service = _ => {
    return (  
        <div className="service">
            <Banner parent={"Home"} child={"Services"}/>
            <div className="container text-center">
           <Slide
            diagnostics={<i className="fa-solid fa-stethoscope"></i>}
            medicine={<i className="fa-solid fa-prescription-bottle-medical"></i>}
            surgery={<i className="fa-regular fa-hospital"></i>}
            emergency={<i className="fa-solid fa-truck-medical"></i>}
            vaccine={<i className="fa-solid fa-syringe"></i>}
            qualified ={<i className="fa-solid fa-user-doctor"></i>}
            Tdiagnostics={"Diagnostics"}
            Tmedicine={"Treatment"}
            Tsurgery={"Surgery"}
            Temergency={"Emergency"}
            Tvaccine={"Vaccine"}
            Tqualified ={"Qualifieds"}
            />
           </div>
           <section className="raper">
          <div className="container">
          <div className="row">
          <div className="col-lg-3 col-md-5">
          <div className='box'>
                <h2>120</h2>
                <h5>Years With You</h5>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            </div>
          <div className="col-lg-3 col-md-6">
          <div className='box'>
                <h2>400</h2>
                <h5>Awards</h5>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            </div>
          <div className="col-lg-3 col-md-6">
          <div className='box'>
                <h2>250</h2>
                <h5>Doctors</h5>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            </div>
          <div className="col-lg-3 col-md-6">
            <div className='box'>
                <h2>800</h2>
                <h5>Satisfied Client</h5>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            </div>
          </div>
          </div>
           </section>
           <div className="container">
            <div className="doctors">
            <div className="row">
            <div className="col-lg-3 col-md-5">
            <div className='summary'>
                <div className='image'>
                <img src={Doctor5} alt="" />
                </div>
                <h4>Dr. Mahfuz Riad</h4>
                <span>Dentist</span>
                <ul>
                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
            </div>
            </div>
           <div className="col-lg-3 col-md-5">
           <div className='summary'>
           <div className='image'>
                <img src={Doctor8} alt="" />
                </div>
                <h4>Dr. Addition Smith</h4>
                <span>Chiropractor</span>
                <ul>
                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
            </div>
            </div>
            <div className="col-lg-3 col-md-5">
                <div className='summary'>
            <div className='image'>
                  <img src={Doctor6} alt="doctor" />
                  </div>
                <h4>Dr. David Benjamin</h4>
                <span>Cardiologist</span>
                <ul>
                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
            </div>
            </div>
            </div>
           </div>
                </div>
                <LatestNews />
                </div>
    );
}
 
export default Service;