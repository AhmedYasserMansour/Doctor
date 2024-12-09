import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import '../../components/latestnews/latestnews.css';
import News1 from '../../assets/News-1.jpg';
import News2 from '../../assets/News-2.jpg';
import News3 from '../../assets/News-3.jpg';
import News4 from '../../assets/News-4.jpg';
import News5 from '../../assets/News-5.jpg';
import Doc2 from '../../assets/doc-2.jpg';
import Doc3 from '../../assets/doc-3.jpg';
import Doc4 from '../../assets/doc-4.jpg';
import Doc5 from '../../assets/doc-5.jpg';
import Doc6 from '../../assets/doc-6.jpg';

const LatestNews = () => {
    const navigate = useNavigate();
    const handleNavigate = _ => {
        window.scrollTo({
            behavior:'smooth',
            top:0
        });
        navigate('service-detail');
    }
    const settings = {         
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
              }
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
        <div className="latest-news">
        <div className="container">
            <h4>Latest News</h4>
            <h2>Our Latest News</h2>
            <div className="row">
                <Slider {...settings}>
                <div className="latest-news-bx col-lg-3 col-md-5">
                <div className="image">
                        <img src={News1} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li><img src={Doc2} alt="doc-image" />
                        <span>John Deo</span></li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        20 July 2024
                        </li>
                    </ul>
                        <p>In this hospital there are special surgeon</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                <div className="latest-news-bx col-lg-3 col-md-5">
                <div className="image">
                        <img src={News2} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc4} alt="doc-image" />
                        <span>Peter Packer</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        21 July 2024
                        </li>
                    </ul>
                        <p>Can you get a diflucan prescription online?</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                <div className="latest-news-bx col-lg-3 col-md-5">
                    <div className="image">
                        <img src={News3} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc3} alt="doc-image" />
                        <span>Sonar Moyna</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        22 July 2024
                        </li>
                    </ul>
                        <p>Why Is Skin Surgeon Considered Underrated</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                <div className="latest-news-bx col-lg-3 col-md-5">
                    <div className="image">
                        <img src={News4} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc5} alt="doc-image" />
                        <span>Kalina Mollika</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        23 July 2024
                        </li>
                    </ul>
                        <p>Dental Care for Women is very important</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                <div className="latest-news-bx col-lg-3 col-md-5">
                    <div className="image">
                        <img src={News5} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc6} alt="doc-image" />
                        <span>Michel</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        24 July 2024
                        </li>
                    </ul>
                        <p>Health Will Be A Thing Of The Past And Here's Why</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                </Slider>
            </div>
        </div>
       </div>
     );
}
 
export default LatestNews;





