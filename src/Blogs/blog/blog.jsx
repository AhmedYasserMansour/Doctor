import React from 'react';
import '../blog/blog.css';
import Banner from './../../components/banner/Banner';
import { useNavigate } from 'react-router-dom';
import News1 from '../../assets/News-1.jpg';
import News2 from '../../assets/News-2.jpg';
import News3 from '../../assets/News-3.jpg';
import News4 from '../../assets/News-4.jpg';
import News5 from '../../assets/News-5.jpg';
import pic6 from '../../assets/pic6.jpg';
import pic7 from '../../assets/pic7.jpg';
import pic8 from '../../assets/pic8.jpg';
import pic9 from '../../assets/pic9.jpg';
import Doc2 from '../../assets/doc-2.jpg';
import Doc3 from '../../assets/doc-3.jpg';
import Doc4 from '../../assets/doc-4.jpg';
import Doc5 from '../../assets/doc-5.jpg';
import Doc6 from '../../assets/doc-6.jpg';
import Doc7 from '../../assets/doc-7.jpg';
import Doc8 from '../../assets/doc-8.jpg';

const Blog = _ => {
    const navigate = useNavigate()
    const handleNavigate = _ =>{
        window.scrollTo({
            behavior:'smooth',
            top:0
        });
        navigate('/doctor');
    }
    return (  <>
    <Banner parent={"Home"} child={"Blog Grid 3"}/>
    <div className="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
              <div className="blog-bx">
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
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
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
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
                    <div className="image">
                        <img src={News3} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc8} alt="doc-image" />
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
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
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
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
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
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
                    <div className="image">
                        <img src={pic6} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc4} alt="doc-image" />
                        <span>Peter Packer</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        25 July 2024
                        </li>
                    </ul>
                        <p>Can you get a diflucan prescription online?</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
                    <div className="image">
                        <img src={pic7} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc3} alt="doc-image" />
                        <span>Sonar Moyna</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        26 July 2024
                        </li>
                    </ul>
                    <p>Can you get a diflucan prescription online?</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
                    <div className="image">
                        <img src={pic9} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc7} alt="doc-image" />
                        <span>Kalina</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        27 July 2024
                        </li>
                    </ul>
                        <p>Why Is Skin Surgeon Considered Underrated</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="blog-bx">
                    <div className="image">
                        <img src={pic8} alt="doc-image" />
                    </div>
                <ul className='p-0'>
                        <li>
                        <img src={Doc8} alt="doc-image" />
                        <span>Michel</span>
                        </li>
                        <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        28 July 2024
                        </li>
                    </ul>
                        <p>Everyone need to go Dentist regularly</p>
                        <button onClick={handleNavigate}>
                            Read More
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                </div>
                </div>
            </div>
        </div>
       </div>
    </>);
}
 
export default Blog;