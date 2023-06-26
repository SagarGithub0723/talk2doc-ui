import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setuserLogin] = useState({
    id: "",
    userName: "",
    mobileNo: "",
    pw_pin: "",
    department: ""
  });

  const handleChange = (login) =>{
    const value = login.target.value;
    setuserLogin({...userLogin, [login.target.name]: value});
  };

  const validateLogin = (login) =>{
    login.preventDefault();
    console.log(login);   
      LoginService.validateLogin(userLogin).then((response) => {
      console.log(response.data);   
      navigate("/doctor")
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    
    <div className='flex justify-center items-center bg-sky-100'>
      <div className='px-20 py-8 '>
            <div className='font-bold text-2xl tracking-wider'>
                <h>User Login</h>
            </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal text-left'>Mobile</label>
          <input 
              type='text'
              name='mobileNo'
              value={userLogin.mobileNo}
              onChange={(login) => handleChange(login)}
              className='h-10 w-96 border mt-1 px-2 py-2'>                    
          </input>
        </div>
        <div className='items-center justify-center h-14 w-full my-5'>
          <label className='block text-gray-600 text-sm font-normal text-left'>Pw Pin</label>
          <input 
              type='password'
              name='pw_pin'
              value={userLogin.pw_pin}
              onChange={(e) => handleChange(e)}
              className='h-10 w-96 border mt-1 px-2 py-2'>                    
          </input>
        </div> 
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal text-left'>Login as</label>
          <input 
              type='text'
              name='department'
              value={userLogin.department}
              onChange={(login) => handleChange(login)}
              className='h-10 w-96 border mt-1 px-2 py-2'>                    
          </input>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button 
                onClick={validateLogin}
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-0.5'>
                Login
            </button>
            <button 
                onClick={() => navigate("/registration")}
                className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 px-2 py-0.5'>
                Sign Up
            </button>
        </div>
      </div>  
    </div>  
  )
};

export default Login;