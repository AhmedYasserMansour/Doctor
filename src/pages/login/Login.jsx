import React, { useState } from 'react';
import '../login/login.css';
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = _ => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
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
        <div className="login">
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
                         type="text" placeholder='User Name' autoFocus/></li>
                        <li>
                        {data.errors.name && <div className='error alert alert-danger'>{data.errors.name}</div>}
                        <input
                        name='password'
                        value={data.password}
                        onChange={handleChange} 
                        type="password" placeholder='Password'/></li>
                        {data.errors.password && <div className='error alert alert-danger'>{data.errors.password}</div>}
                        <li><button type='submit'className='login-btn'>Login</button></li>
                    </ul>
                </form>
                <div className="forgot">
                    <Link to={'/changepassword'}>Forgot Password</Link>
                </div>
                <p>Dont have any account?</p>
                <button onClick={()=> navigate('/register')} className='register-btn'>Register</button>
        </div>
        </div>
     );
}
 
export default Login;