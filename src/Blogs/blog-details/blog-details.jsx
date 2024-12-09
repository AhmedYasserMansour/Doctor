import React from 'react';
import '../blog-details/blog-details.css';
import Banner from './../../components/banner/Banner';
import Pic from '../../assets/pic1.jpg';
import Pic2 from '../../assets/pic10.jpg'
import Pic3 from '../../assets/pic-8.jpg';
import Doc from '../../assets/doc-7.jpg';
import Doc2 from '../../assets/doc-8.jpg';
import Doc3 from '../../assets/doc-6.jpg';
import { Link } from 'react-router-dom';

const BlogDetails = _ => {
    return (  
       <>
       <Banner parent={'Home'} child={'Blog Details'} />
        <div className="blog-details">
            <div className="container">
               <div className='report'>
               <img className='pic' src={Pic} alt="doctor-picture" />
                <ul className='date p-0'>
                    <li>
                        <img className='doc-1' src={Doc} alt="Doc-photo" />
                        Sonar Moyna
                    </li>
                    <li>
                    <i className="fa-solid fa-calendar-days"></i>
                    20 July 2024  
                    </li>
                </ul>
               </div>
                <h2 className='tips '>Precious Tips To Help You Get Better.</h2>
                <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results,
                     you can always hit the refresh button to generate a new list of unique titles.</p>
                     <q>Once you’ve gotten all the titles and have chosen the best one,
                      the next thing you need to do is to craft a magnetic content.
                      Great content marketers excel at creating content.</q>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <ul className='photos'>
                        <li>
                            <img src={Pic3} alt='doc'/>
                        </li>
                        <li>
                            <img src={Pic2} alt='doc' />
                        </li>
                     </ul>
                     <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions.
                      If you’re not satisfied with the results, 
                        you can always hit the refresh button to generate a new list of unique titles.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                         <hr />
                         <ul className='health'>
                            <li>
                            Tags: <span>Health Growth Life</span>
                            </li>
                            <li>
                            Share: 
                            <span>
                            <Link to="https://www.facebook.com/" target='blank'><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-instagram"></i></Link>
                            </span>
                            </li>
                         </ul>
                         <hr />
                         <div className="doc-one">
                            <img src={Doc2} alt="doc" />
                            <div>
                                <h4>Sonar Z. Moyna</h4>
                                <p>
                                Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.
                                </p>
                                <span>
                            <Link to="https://www.facebook.com/" target='blank'><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-instagram"></i></Link>
                            </span>
                            </div>
                            </div>
                            <h4 className='comments'>8 Comments</h4>
                            <div className="box">
                                <div className='info'>
                                <img src={Doc3} alt="doc" />
                                <div className="name">
                                    <h4>George</h4>
                                    <span>May 09, 2024 at 10:45 am</span>
                                </div>
                                </div>
                                   <p>
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                    </p>
                                   <div className="reply">
                                   <Link>Reply</Link> 
                                   </div>
                            </div>
                            <div className="box">
                            <div className='info'>
                                <img src={Doc} alt="doc" />
                                <div className="name">
                                    <h4>Falikaz</h4>
                                    <span>May 09, 2024 at 10:45 am</span>
                                </div>
                                </div>
                                   <p>
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                    </p>
                                   <div className="reply">
                                   <Link>Reply</Link> 
                                   </div>
                            </div>
                            <div className="box">
                            <div className='info'>
                                <img src={Doc2} alt="doc" />
                                <div className="name">
                                    <h4>Sonar</h4>
                                    <span>May 09, 2024 at 10:45 am</span>
                                </div>
                                </div>
                                   <p>
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                    </p>
                                   <div className="reply">
                                   <Link>Reply</Link> 
                                   </div>
                            </div>
                            <div className="box">
                            <div className='info'>
                                <img src={Doc3} alt="doc" />
                                <div className="name">
                                    <h4>Michel</h4>
                                    <span>May 09, 2024 at 10:45 am</span>
                                </div>
                                </div>
                                   <p>
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                    </p>
                                   <div className="reply">
                                   <Link>Reply</Link> 
                                   </div>
                            </div>
            <div className="leave">
                <h4>Leave a Reply</h4>
               <form>
               <ul className='p-0'>
                    <li>
                        <input type="text" placeholder='Author'/>
                        <input type="email" placeholder='Email' />
                    </li>
                    <li>
                        <textarea placeholder='Comment'></textarea>
                    </li>
                    <li>
                        <button type='submit'>Submit</button>
                    </li>
                </ul>
               </form>
            </div>
            </div>
        </div>
       </>
    );
}
 
export default BlogDetails;