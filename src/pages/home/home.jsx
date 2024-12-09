import '../home/home.css'
import Doctor from '../../assets/doctor.png';
import Triangle from '../../assets/triangle.png'
import plus from '../../assets/plus.png';
import base from '../../assets/base.png'
import { useNavigate } from 'react-router-dom';
import AboutComponents from '../../components/aboutcomponents/aboutcomponents';
import LatestNews from '../../components/latestnews/latestnews';
import Appointment from './../../components/appointment/appointment';
import Mobile from '../../assets/mobile.png';
import Women from '../../assets/women.png';
import Heart from '../../assets/heart.png';
import Location from '../../assets/location.jpg';
import Setting from '../../assets/setting.png';
import Nike from '../../assets/nike.png';
import Slide from '../../components/slide/slide';
import Oval from '../../assets/oval.png';
import Doc2 from '../../assets/doc-2.jpg';
import Doc3 from '../../assets/doc-3.jpg';
import Doc4 from '../../assets/doc-4.jpg';
import Doc6 from '../../assets/doc-6.jpg';
import Doc7 from '../../assets/doc-7.jpg';
import Doc8 from '../../assets/doc-8.jpg';

import Slider from 'react-slick';
import { useRef } from 'react';


const Home = () => {
    const navigate = useNavigate();
    const homeRef = useRef(null);
    
     const handleNavigate = (path)=>{
        window.scrollTo({
            behavior:'smooth',
            top:0
        });
                navigate(path);
    }
    let sliderRef = useRef(null);
    const next = _ => {
      sliderRef.slickNext();
    };
    const previous = _ => {
      sliderRef.slickPrev();
    };
    const settings = {         
        infinite: true,
        arrows: true,      
        speed: 500,            
        slidesToShow: 1,     
        slidesToScroll: 1, 
    }
    return ( 
    <div ref={homeRef}>
        <div className="container">
            <div className="row home">
                <div className="left col-md-7 col-lg-6 col-sm-7">
                    <h6>We Provide All Health Care Solution</h6>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                     <img className='triangle' src={Triangle} alt="Triangle" /> 
                     <img src={plus} alt="" className="plus" />  
                    <button onClick={()=> navigate("about")}>Read More</button>
                </div>
                <div className="right col-md-5 col-lg-5 col-sm-5">
                    <i className="fa-regular fa-square"></i>
                  <img className='doc' src={Doctor} alt="" />
                  <img src={base} alt="" className="base"></img>
                </div>
            </div>
        </div>
        <AboutComponents/>
       <div className="working">
       <div className="container">
            <h5>Working Process</h5>
            <h2>How we works?</h2>
            <div className="row mb-3">
                <div className="one col-lg-3 col-md-5">
                    <h3>01</h3>
                    <h4>Make Appointmnet</h4>
                    <p>It is a long established fact that a reader will be distracted by the
                         readable content of.</p>
                         <button onClick={()=>handleNavigate('booking')} className=" ms-4">
                         View More <i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="two col-lg-3 col-md-5">
                    <h3>02</h3>
                    <h4>Take Treatment</h4>
                    <p>It is a long established fact that a reader will be distracted by the
                         readable content of.</p>
                         <button onClick={()=> handleNavigate('service')} className=" ms-4">
                         View More <i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="three col-lg-3 col-md-6">
                    <h3>03</h3>
                    <h4>Registration</h4>
                    <p>It is a long established fact that a reader will be distracted by the
                         readable content of.</p>
                         <button  onClick={()=> handleNavigate('contact')} className=" ms-4">
                         View More <i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
       </div>
       <section className='section-area'>
       <div className="container-fluid">
        <div className="row">
            <div className='col-lg-5 col-md-5'>
               <Appointment />
            </div>
            <div className='col-lg-6 col-md-6'>
             <div className='mobile'>
             <img src={Mobile} alt="Mobile" />
             <img src={Women} alt="women" />
             </div>
              <img className='heart' src={Heart} alt="heart" />
              <img className='setting' src={Setting} alt="setting" />
              <img className='nike' src={Nike} alt="nike" />
              <img className='location' src={Location} alt="location" />
              </div>
        </div>
       </div>
       </section>
       <section className='services-home'>
        <div className="row align-items-center">
        <div className="services-left col-lg-4 col-md-4">
        <h4>Services</h4>
        <h2>We Cover A Big Variety Of Medical Services</h2>
        <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
        <button onClick={()=> handleNavigate('service')} >All Services</button>
        </div>
        <div className="right col-lg-8 col-md-8">
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
        </div>
       </section>
       <div className="testimonial">
        <div className="container">
            <div className="row align-items-center">
                <div className="testimonial-left col-lg-6">
                    <div>
                        <img src={Oval} alt="oval-photo" />
                        <ul>
                            <li><img src={Doc2} alt="Doc2" /></li>
                            <li><img src={Doc3} alt="Doc3" /></li>
                            <li><img src={Doc4} alt="Doc4" /></li>
                            <li><img src={Doc6} alt="Doc6" /></li>
                            <li><img src={Doc7} alt="Doc7" /></li>
                            <li><img src={Doc8} alt="Doc8" /></li>
                        </ul>
                    </div>
                </div>
                <div className="testimonial-right">
                <Slider 
                  ref={slider => {
                    sliderRef = slider;
                  }}
                {...settings}>
              <div className='testimonial-bx'>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati adipisci possimus,
                     debitis dolor recusandae excepturi quibusdam numquam. Perspiciatis, 
                    asperiores. Voluptas dolorem rem officiis atque labore. Ea aspernatur ut minima fugit.</p>
                </div>
                    <div className='d-flex justify-content-between'>
                    <div>
                    <h3>John Deo</h3>
                    <span>patient</span>
                    </div>
                <div>
                <i className="fa-solid fa-quote-right"></i>
                </div>
                    </div>
              </div>
              <div className='testimonial-bx'>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati adipisci possimus,
                     debitis dolor recusandae excepturi quibusdam numquam. Perspiciatis, 
                    asperiores. Voluptas dolorem rem officiis atque labore. Ea aspernatur ut minima fugit.</p>
                </div>
                    <div className='d-flex justify-content-between'>
                    <div>
                    <h3>John Deo</h3>
                    <span>patient</span>
                    </div>
                <div>
                <i className="fa-solid fa-quote-right"></i>
                </div>
                    </div>
              </div>
              <div className='testimonial-bx'>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati adipisci possimus,
                     debitis dolor recusandae excepturi quibusdam numquam. Perspiciatis, 
                    asperiores. Voluptas dolorem rem officiis atque labore. Ea aspernatur ut minima fugit.</p>
                </div>
                    <div className='d-flex justify-content-between'>
                    <div>
                    <h3>John Deo</h3>
                    <span>patient</span>
                    </div>
                <div>
                <i className="fa-solid fa-quote-right"></i>
                </div>
                    </div>
              </div>
                </Slider>
                <div className='arrows'>
        <button onClick={previous}>
        <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={next}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
                </div>
                </div>
            </div>
            </div>
       </div>
       <LatestNews/>
    </div>
     );
}
 
export default Home;