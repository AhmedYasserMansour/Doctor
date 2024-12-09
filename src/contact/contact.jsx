import React, { useState } from 'react';
import '../contact/contact.css';
import Banner from './../components/banner/Banner';
import { Link } from 'react-router-dom';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import Address from '../assets/address.png';

const Contact = _ => {
    const [data, setData] = useState({
        name: '',
        email: '',
        number: '',
        department: '',
        message: '',
        errors: {}
    });
    const handleSubmit = e =>{
        e.preventDefault();
        const errors = validate();
        if(!errors) return;
        return errors
    }
    const validate = _ => {  
        const errors = {}; 
        if(data.name.trim() === ''){
            errors.name = 'Name Is Required'
        }
        if(data.email.trim() === ''){
            errors.email = 'Email Is Required'
        }
        if(data.number.trim() === ''){
            errors.number = 'Phone Is Required'
        }
        if(data.department.trim() === ''){
            errors.department = 'Department Is Required'
        }
        if(data.message.trim() === ''){
            errors.message = 'Message Is Required'
        }
        setData(prev=>({
            ...prev,
            errors
        }));
        return Object.keys(errors).length === 0 ? null : errors ;
    }       
    const handleValue = e => {
            const {name, value} = e.target; // Edit
            setData(prev => ({ // Clone & Set
                ...prev, 
                [name]: value 
            }));
    }
    return ( 
        <>
            <Banner parent={"Home"} child={'Contact Us'}/>
        <div className="contact">
            <div className="container informations">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <input
                        name='name'
                        value={data.name}
                        onChange={handleValue}
                         type="text" placeholder='Your Name' autoFocus/>
                         {data.errors.name && <div className='error mb-0 alert alert-danger'>{data.errors.name}</div>}
                        <input
                        name='email'
                        value={data.email}
                        onChange={handleValue}
                         type="email" placeholder='Email' />
                          {data.errors.email && <div className='error mb-0 alert alert-danger'>{data.errors.email}</div>}
                        <input
                        name='number'
                        value={data.number}
                        onChange={handleValue}
                         type="number" placeholder='Phone Numbers'/>
                         {data.errors.number && <div className='error mb-0 alert alert-danger'>{data.errors.number}</div>}
                        <select
                        name='department'
                        value={data.department}
                        onChange={handleValue} >
                                <option value=''>Selecty Department</option>   
                                <option value="One">One</option>
                                <option value='Two'>Two</option>
                                <option value='Three'>Three</option>
                            </select>
                            {data.errors.department && <div className='error mb-0 alert alert-danger'>{data.errors.department}</div>}
                            <textarea 
                            name='message'
                            value={data.message}
                            onChange={handleValue}
                            placeholder='Type Message' ></textarea>
                            {data.errors.message && <div className='error mb-0 alert alert-danger'>{data.errors.message}</div>}
                            <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="contact-info">
                    <div className="text">
                        <h3>Contact Us For Any Informations</h3>
                        <div className="box">
                            <h5>
                            <i className="fa-solid fa-map-location-dot"></i>
                            Location
                            </h5>
                            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                        </div>
                        <div className="box">
                            <h5>
                            <i className="fa-solid fa-envelope-open-text"></i>
                            Email & Phone
                            </h5>
                            <p>AhmedYasserMansour111 (+2) 01006352442</p>
                        </div>
                        <div className="box">
                            <h5>
                            <i className="fa-solid fa-globe"></i>
                            Follow Us
                            </h5>
                            <ul className='mb-0'>
                                <li><Link to="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></Link></li>
                                <li><Link to="https://www.instagram.com/" target='blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                                <li><Link to="https://www.linkedin.com/feed/" target='blank'><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="bx phone">
                                <div className="image">
                                    <img src={Phone} alt="Phone" />
                                </div>
                                <div>
                                <h4>Contact Number</h4>
                                <p>+2 01006352442</p>
                                <p>+2 01150298518</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="bx email">
                                <div className="image">
                                    <img src={Email} alt="Phone" />
                                </div>
                                <div>
                                <h4>Email Address</h4>
                                <p>AhmedYassermansouer111</p>
                                <p>info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="bx address">
                                <div className="image">
                                    <img src={Address} alt="Phone" />
                                </div>
                                <div>
                                <h4>Address</h4>
                                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
     );
}
 
export default Contact;