import React, { useState } from 'react';
import '../appointment/appointment.css'
const Appointment = _ => {
    const [data, setData] = useState({
        department: '',
        doctor: '',
        name: '',
        number: '',
        date: '',
        errors: {}
    });
   const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if(!errors) return;
    return errors;
   }
   const validate = () => {
    const errors = {}
    if(data.department.trim() === '') {
        errors.department = 'Department Is Required'
    }
    if(data.doctor.trim() === '') {
        errors.doctor = 'Doctor Is Required'
    }
    if(data.name.trim() === '') {
        errors.name = 'Name Is Required'
    }
    if(data.number.trim() === '') {
        errors.number = 'Phone Is Required'
    }
    if(data.date.trim() === '') {
        errors.date = 'Date Is Required'
    }
    setData(prev => ({
        ...prev,
        errors
    }))
    return Object.keys(errors).length === 0 ? null : errors;
   }
   const handleChange = e => {
    const {name, value} = e.target;
    setData(prev=>({
        ...prev,
        [name]:value
    }));
   }
   
    return ( 
        <div className="appointment">
            <div className="row justify-content-center pe-auto">
                    <div className='form-container'>
                       <form onSubmit={handleSubmit}>
                       <div className="form-group">
                            <select
                            name='department'
                            value={data.department}
                            onChange={handleChange}
                            >
                                <option value={''}>Selecty Department</option>   
                                <option value="One">One</option>
                                <option value='Two'>Two</option>
                                <option value='Three'>Three</option>
                            </select>
                        </div>
                            {data.errors.department && <div className='error alert alert-danger'>{data.errors.department}</div>}
                        <div className="form-group">
                            <select
                            name='doctor'
                            value={data.doctor}
                            onChange={handleChange} 
                            >
                                <option>Select Doctor</option>   
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                        {data.errors.doctor && <div className='error alert alert-danger'>{data.errors.doctor}</div>}
                        <div className="form-group">
                           <input 
                           name='name'
                           value={data.name}
                           onChange={handleChange}
                           type="text"  placeholder='Your Name'/>
                        </div>
                        {data.errors.name && <div className='error alert alert-danger'>{data.errors.name}</div>}
                        <div className="form-group">
                           <input
                           name='number'
                           value={data.number}
                           onChange={handleChange}
                            type="number"  placeholder='Phone Numbers'/>
                        </div>
                        {data.errors.number && <div className='error alert alert-danger'>{data.errors.number}</div>}
                        <div className="form-group">
                           <input
                           name='date'
                           value={data.date}
                           onChange={handleChange}
                            type="date" placeholder='Your Phone'/>
                        </div>
                        {data.errors.date && <div className='error alert alert-danger'>{data.errors.date}</div>}
                        <button type='submit' className='btn btn-primary'>Appointment Now</button>
                       </form>
                    </div>
                </div>
        </div>
     );
}
 
export default Appointment;