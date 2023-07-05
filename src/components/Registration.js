import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Util from '../utility/Util';

const Registration = () => {
  const navigate = useNavigate();
  const [userTypeReg, setuserTypeReg] = useState({
    userType: ""    
  });

  const handleChange = (userType) =>{
    const value = userType.target.value;
    setuserTypeReg({...userTypeReg, [userType.target.name]: value});
  };
  const userTypeRegistration = (userType) => {
    userType.preventDefault();
    console.log(userTypeReg.userType);
    const userRegNav = Util.getUserRegisterNav(userTypeReg.userType)
    navigate(userRegNav);    
  };
  return (
    <div className='items-center justify-center h-4 w-full  bg-sky-100'>
      <div className='px-20 py-8  bg-sky-100'>
        <label htmlFor="userType" className='font-bold text-xl tracking-wider'>Register as</label>
        <div className='block items-center justify-center h-4 w-full my-4'>  
          <input 
            type='radio' 
            className='py-2' 
            name='userType'
            value="doctor" 
            onChange={(e) => handleChange(e)}/>
          <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Doctor</label>
          <input 
            type='radio' 
            className='py-2' 
            name='userType'
            value="patient" 
            onChange={(e) => handleChange(e)}/>
          <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Patient</label>     
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button 
            onClick={userTypeRegistration}
            className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-0.5'>
            Submit
          </button>        
        </div>
      </div>
    </div>
  )
}

export default Registration;