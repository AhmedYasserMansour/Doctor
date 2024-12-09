import React from 'react';
import Slider from 'react-slick';
import '../slide/slide.css'
import { useNavigate } from 'react-router-dom';

const Slide = (props) => {
  const navigate = useNavigate();
  const top = ()=>{
     navigate("service-detail");
     window.scroll({
      behavior: 'smooth',
      top:0
     })
  }
    const settings = {
        dots: true,          
        infinite: true,
        arrows: false,
        autoplay:true,      
        autoplayspeed: 500,            
        slidesToShow: 3,     
        slidesToScroll: 1,  
        responsive: [
          {
            breakpoint: 1023,  
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,   
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
      <div className="slide">  
        <Slider {...settings}>
        <div className="box col-lg-3 col-md-5">
      <div>
          <div className='slide-icon'>
          {props.diagnostics}
          </div>
        <h2>{props.Tdiagnostics}</h2>   
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        </div>
        <div className="box col-lg-3 col-md-5">
        <div className='slide-icon'>
          {props.medicine}
          </div>
        <h2>{props.Tmedicine}</h2>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        <div className="box col-lg-3 col-md-5">
      <div>
      <div className='slide-icon'>
          {props.surgery}
          </div>
        <h2>{props.Tsurgery}</h2>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        </div>
        <div className="box col-lg-3 col-md-5">
      <div>
      <div className='slide-icon'>
          {props.emergency}
          </div>
        <h2>{props.Temergency}</h2>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        </div>
        <div className="box col-lg-3 col-md-5">
      <div>
      <div className='slide-icon'>
          {props.vaccine}
          </div>
        <h2>{props.Tvaccine}</h2>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        </div>
        <div className="box col-lg-3 col-md-5">
      <div>
      <div className='slide-icon'>
          {props.qualified}
          </div>
        <h2>{props.Tqualified}</h2>
        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
        <button onClick={top} className='more'>View More</button>
      </div>
        </div>
        </Slider>
        </div>
    );
}
 
export default Slide;