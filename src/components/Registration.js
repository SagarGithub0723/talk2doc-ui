import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    console.log(userTypeReg.userType)
    //userType.preventDefault();
    if(userTypeReg.userType === "doctor") {
      navigate("/doctorRegistration");
    } else if(userTypeReg.userType === "patient") {
      navigate("/patientRegistration");
    }
  };
  return (
    <div className='items-center justify-center h-14 w-full my-4'>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label htmlFor="userType">Select User Register</label>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>  
        <select name="userType" onChange={(e) => handleChange(e)}    
            value={userTypeReg.userType} >    
            <option value="select">--Select--</option>    
            <option value="doctor">Doctor</option>    
            <option value="patient">Patient</option>    
            <option value="other">Other</option>    
        </select>      
      </div>
      <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button 
              onClick={userTypeRegistration}
              className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-0.5'>
              Submit
          </button>        
      </div>
    </div>
  )
}

export default Registration;