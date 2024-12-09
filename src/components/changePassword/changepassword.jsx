import React, { useState } from 'react';
import '../../components/changePassword/changepassword.css'
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const ChangePassword = _ => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: '',
        newPassword: '',
        errors: {}
    });
    const handleSubmit = e => {
        e.preventDefault();
        const errors = validate();
        if(!errors) {
            navigate('/doctor');
        };
        return errors
    }
    const validate = _ => {
        const errors = {}
        if(data.password.trim() === ''){
            errors.password = "Password Is Required"
        }
        if(data.newPassword.trim() === ''){
            errors.newPassword = "New Password Is Required";
        }
        if (data.password.trim() !== '' && data.newPassword.trim() !== '' && data.password !== data.newPassword) {
            errors.match = "The passwords don't match. Please try again.";
        }
        setData(prev=>({
            ...prev,
            errors
        }))
        return Object.keys(errors).length === 0 ? null : errors
    }
    const handleChange = e => {
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]:value}));
    }
    return ( 
        <div className="changepassword">
        <div>
                <div className="image">
                    <img src={Logo} alt="Logo" />
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li><input
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                         type="password" placeholder='Password' autoFocus/></li>
                        <li>
                        {data.errors.password && <div className='error alert alert-danger'>{data.errors.password}</div>}
                            <input
                        name='newPassword'
                        value={data.newPassword}
                        onChange={handleChange} 
                        type="password" placeholder='New Password'/></li>
                        {data.errors.newPassword && <div className='error alert alert-danger'>{data.errors.newPassword}</div>}
                        {data.errors.match && <div className='error alert alert-danger'>{data.errors.match}</div>}
                        <li><button className='submit-btn'>Submit</button></li>
                    </ul>
                </form>
                <p>Already have an account?</p>
                <Link className='login-btn' to={'/login'}>Login</Link>
        </div>
        </div>
     );
}
 
export default ChangePassword;