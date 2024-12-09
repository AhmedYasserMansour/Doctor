import React from 'react';
import '../../components/aboutcomponents/aboutcomponents.css'
import pic1 from '../../assets/pic-1.jpg';
import pic2 from '../../assets/pic-2.jpg';
import pic3 from '../../assets/pic-3.jpg';
import squareBlue from '../../assets/square-blue.png'
import squareOrange from '../../assets/square-orange.png'

const AboutComponents = _ => {
    return ( 
      <div className="about-components">
          <div className="container-fluid">
            <div className="row">
              <div className='about-left  mt-4 mb-4 col-lg-6'>
              <ul>
                    <li>
                        <img src={pic1} alt="" />
                    </li>
                    <li>
                        <img src={pic2} alt="" />
                    </li>
                    <li>
                        <img src={pic3} alt="" />
                    </li>
                    <li>
                        <span><h2>20</h2>Year Experience</span>
                    </li>
                </ul>
              </div>
                <div className="about-right mt-4 mb-4 col-lg-6">
                    <img className='square-blue' src={squareBlue} alt="" />
                <h5>About Us</h5>
                <h2>The Great Place Of Medical Hospital Center</h2>
                <p className='mb-5'>We provide the special tips and advice’s
                 of heath care treatment and high level of best technology involve in the our hospital.</p>
                 <ul className='p-0'>
                   <li><div><i className="fa-solid fa-truck-medical"></i><span>Emergency Help</span> </div>
                   <div><i className="fa-solid fa-user-doctor"></i><span>Qualified Doctors</span></div></li>
                  <li><div><i className="fa-solid fa-star-of-life"></i><span>Best Professionals</span></div>
                  <div><i className="fa-solid fa-syringe"></i><span>Medical Treatment</span></div>
                  </li>
                 </ul>
                 <img className='square-orange' src={squareOrange} alt="square-photo" />
                </div>
            </div>
        </div>
      </div>
    );
}
 
export default AboutComponents;