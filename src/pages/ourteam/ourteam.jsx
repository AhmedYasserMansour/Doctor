import React from 'react';
import '../ourteam/ourteam.css'
import Banner from '../../components/banner/Banner';
import { Link } from 'react-router-dom';
import Doctor5 from '../../assets/doc-5.jpg';
import Doctor8 from '../../assets/doc-8.jpg';
import Doctor6 from '../../assets/doc-6.jpg';
import Doctor4 from '../../assets/doc-4.jpg';
import Doctor7 from '../../assets/doc-7.jpg';
import Doctor3 from '../../assets/doc-3.jpg';

const OurTeam = _ => {
    return ( 
        <div className='our-team'>
          <div>
        <Banner parent ="Home" child="Our Team"/>
          </div>
          <div className="container-fluid">
           <div className="row">
            <div className="summary col-lg-3 col-md-5">
                <div>
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
           <div className="summary col-lg-3 col-md-5">
                <div>
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
            <div className="summary col-lg-3 col-md-5">
                  <div>
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
           <div className="summary col-lg-3 col-md-5">
                  <div>
                  <img src={Doctor4} alt="doctor" />
                  </div>
                <h4>Dr. David Benjamin</h4>
                <span>Cardiologist</span>
                <ul>
                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
            </div>
            <div className="summary col-lg-3 col-md-5">
                  <div>
                  <img src={Doctor7} alt="doctor" />
                  </div>
                <h4>Dr. David Benjamin</h4>
                <span>Cardiologist</span>
                <ul>
                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
            </div>
            <div className="summary col-lg-3 col-md-5">
                  <div>
                  <img src={Doctor3} alt="doctor" />
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
    );
}
 
export default OurTeam;