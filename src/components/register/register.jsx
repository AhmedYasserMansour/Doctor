import React, { useState } from 'react';
import '../../components/register/register.css';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Register = _ => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        userName: '',
        password: '',
        errors: {}
    });
    const handleSubmit = e => {
        e.preventDefault();
        const errors = validate();
        if(!errors) {
            navigate('/doctor')
        };
        return errors
    }
    const validate = _ => {
        const errors = {}
        if(data.name.trim() === ''){
            errors.name = "Name Is Required"
        }
        if(data.email.trim() === ''){
            errors.email = "Email Is Required"
        }
        if(data.userName.trim() === ''){
            errors.userName = "userName Is Required"
        }
        if(data.password.trim() === ''){
            errors.password = "Password Is Required"
        }
        setData(prev=>({
            ...prev,
            errors
        }))
        return Object.keys(errors).length === 0 ? null : errors
    }
    const handleChange = e => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]:value
        }));
    }
    return ( 
        <div className="register">
        <div>
                <div className="image">
                    <img src={Logo} alt="Logo" />
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li><input
                        name='name'
                        value={data.name}
                        onChange={handleChange}
                        type="text" placeholder='Name' autoFocus/></li>
                        <li>
                        {data.errors.name && <div className='error alert alert-danger'>{data.errors.name}</div>}
                        <input
                        name='email'
                        value={data.email}
                        onChange={handleChange} 
                        type="email" placeholder='Email'/></li>
                        <li>
                        {data.errors.email && <div className='error alert alert-danger'>{data.errors.email}</div>}
                        <input
                        name='userName'
                        value={data.userName}
                        onChange={handleChange} 
                         type="text" placeholder='User Name'/></li>
                        <li>
                        {data.errors.userName && <div className='error alert alert-danger'>{data.errors.userName}</div>}
                        <input
                         name='password'
                         value={data.password}
                         onChange={handleChange} 
                        type="password" placeholder='Password'/></li>
                        {data.errors.password && <div className='error alert alert-danger'>{data.errors.password}</div>}
                        <li><button className='register-btn'>Register Now</button></li>
                    </ul>
                </form>
                <p>Already have an account?</p>
                <button onClick={()=> navigate('/login')} className='login-btn'>Login</button>
        </div>
        </div>
     );
}
 
export default Register;