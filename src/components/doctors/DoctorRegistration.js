import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationService from '../../services/RegistrationService';

function DoctorRegistration() {
    const navigate = useNavigate();
    const [docRegister, setdocRegister] = useState({
        id: "",
        userName: "",
        mobileNo: "",
        pw_pin: "",
        department: ""
    });

    const handleChange = (docReg) =>{
        const value = docReg.target.value;
        setdocRegister({...docRegister, [docReg.target.name]: value});
    };

    const saveDoctorRegister = (docReg) =>{
        docReg.preventDefault();
        console.log(docReg);   
        RegistrationService.saveDoctorRegistration(docRegister).then((response) => {
        console.log(response.data);   
        navigate("/doctor");
        }).catch((error) => {
        console.log(error);
        });
    };
  return (
    <div className='flex justify-center items-center bg-sky-100'>
    <div className='px-20 py-8 '>
          <div className='font-bold text-2xl tracking-wider'>
              <h>Docotr Registration</h>
          </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>First Name</label>
        <input 
            type='text'
            name='firstName'
            value={docRegister.firstName}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Last Name</label>
        <input 
            type='text'
            name='lastName'
            value={docRegister.lastName}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Email ID</label>
        <input 
            type='email'
            name='emailId'
            value={docRegister.emailId}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Mobile</label>
        <input 
            type='text'
            name='mobileNo'
            value={docRegister.mobileNo}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Specialist</label>
        <input 
            type='text'
            name='specialist'
            value={docRegister.specialist}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Gender</label>
        <select name="gender" onChange={(e) => handleChange(e)}    
            value={docRegister.gender} >    
            <option value="select">--Select--</option>    
            <option value="M">Male</option>    
            <option value="F">Female</option>      
        </select> 
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Area Pin Code</label>
        <input 
            type='text'
            name='areaPinCode'
            value={docRegister.areaPinCode}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div>
      <div className='items-center justify-center h-14 w-full my-5'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Pw Pin</label>
        <input 
            type='password'
            name='pw_pin'
            value={docRegister.pw_pin}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div> 
      <div className='items-center justify-center h-14 w-full my-5'>
        <label className='block text-gray-600 text-sm font-normal text-left'>Confirm Pw Pin</label>
        <input 
            type='password'
            name='re_pw_pin'
            value={docRegister.pw_pin}
            onChange={(docReg) => handleChange(docReg)}
            className='h-10 w-96 border mt-1 px-2 py-2'>                    
        </input>
      </div> 
      <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button 
              onClick={saveDoctorRegister}
              className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-0.5'>
              Submit
          </button>        
      </div>
    </div>  
  </div>  

  )
}

export default DoctorRegistration